import { Auth } from "@angular/fire/auth";
import { doc, docSnapshots, Firestore, getDoc } from "@angular/fire/firestore";
import { setDoc } from "firebase/firestore";
import { ConnectableObservable } from "rxjs";
import { DEFAULT_PARTY, USERS_COLLECTION } from "../db/db-constants";

/** Bootstrap to initialize the app before services are initialized. */
export class AppBootstrap {
  public static partyId: string;

  /**
   * Called once on app load.
   *
   * Any changes to args here must update app.module.ts too. This must return a function.
   */
  static bootstrap(firestore: Firestore, auth: Auth): () => Promise<void> {
    return async () => {
      return new Promise(async (resolve) => {
        auth.onAuthStateChanged(async (user) => {
          if (user == null) {
            // The page should be refreshed after login and this will run again.
            console.warn("Dropping bootstrap due to not logged in user.");
            resolve();
            return;
          }
          const currentUserPath = `/${USERS_COLLECTION}/${user.uid}`;
          // When the user's party changes, force a refresh. Not the best, but
          // this is what it means to be bootstrapped with the party.
          let resolvedBefore = false;
          let prevParty: string = undefined;
          docSnapshots(doc(firestore, currentUserPath)).subscribe(
            async (userSnap) => {
              // Note for future Matthew: I'm not 100% sure docSnapshots works with a doc that doesn't exist.
              let newParty: string;
              if (!userSnap.exists()) {
                // Attach the user to the default party if they don't have a doc.
                await setDoc(doc(firestore, currentUserPath), {
                  name: user.displayName,
                  party: DEFAULT_PARTY,
                });
                newParty = DEFAULT_PARTY;
              } else {
                newParty = (await userSnap.data()).party;
              }
              AppBootstrap.partyId = newParty;
              if (!resolvedBefore) {
                resolvedBefore = true;
                prevParty = newParty;
                resolve();
                return;
              }
              if (newParty !== prevParty) {
                // Snooze in case this is the admin interface changing the party.
                // This is so ugly....

                setTimeout(() => window.location.reload(), 500);
              }
            }
          );
        });
      });
    };
  }
}
