import { Auth } from "@angular/fire/auth";
import { doc, Firestore, getDoc } from "@angular/fire/firestore";
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
          const userSnap = await getDoc(doc(firestore, currentUserPath));
          if (!userSnap.exists()) {
            // Attach the user to the default party if they don't have a doc.
            await setDoc(doc(firestore, currentUserPath), {
              name: user.displayName,
              party: DEFAULT_PARTY,
            });
            AppBootstrap.partyId = DEFAULT_PARTY;
          } else {
            AppBootstrap.partyId = (await userSnap.data()).party;
          }

          resolve();
        });
      });
    };
  }
}
