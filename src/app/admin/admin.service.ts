import { Injectable } from "@angular/core";
import { collection, doc, Firestore, getDoc } from "@angular/fire/firestore";
import { setDoc, updateDoc } from "firebase/firestore";
import { AttackModifierUtil } from "src/types/attack-modifiers";
import { Party } from "src/types/party";
import { PARTY_COLLECTION, USERS_COLLECTION } from "../db/db-constants";
import { RoleClass } from "../db/classes";
import { ALL_ELEMENT_TYPES } from "../db/elements";
import { GameBox } from "src/types/gamebox";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  constructor(private firestore: Firestore) {}

  async createParty(partyId: string, partyData: Partial<Party>): Promise<void> {
    if (!partyId || !partyData.numCharacters) {
      alert("Invalid party data");
      return;
    }
    const partyDoc = doc(this.firestore, `${PARTY_COLLECTION}/${partyId}`);
    const existingSnap = await getDoc(partyDoc);
    if (existingSnap.exists()) {
      alert("Party already exists");
      return;
    }
    const party: Partial<Party> = {
      activeScenario: "gh-1",
      averageCharacterLevel: 1,
      // Note to self: This field is untested.
      gamebox: partyData.gamebox,
      numCharacters: partyData.numCharacters,
      monsterDeck: {
        flipped: [],
        unflipped: AttackModifierUtil.getStandardSet(),
      },
      partyName: partyData.partyName,
      scenarioLevel: 1,
    };
    await setDoc(partyDoc, party);

    for (const element of ALL_ELEMENT_TYPES) {
      const elementDoc = doc(
        this.firestore,
        `${PARTY_COLLECTION}/${partyId}/elements/${element}`
      );
      await setDoc(elementDoc, {
        state: 0,
      });
    }

    alert("Party created");
  }

  async addUserToParty(partyId: string, uid: string, className: RoleClass) {
    const partyMemberDoc = doc(
      this.firestore,
      `${PARTY_COLLECTION}/${partyId}/members/${uid}`
    );
    await setDoc(partyMemberDoc, {
      class: className,
      member: true,
    });
    alert("Party member added");
  }

  async setParty(partyId: string, uid: string) {
    const userDoc = doc(this.firestore, `/${USERS_COLLECTION}/${uid}`);
    await updateDoc(userDoc, {
      party: partyId,
    });
    alert("The user's party has been updated");
  }
}
