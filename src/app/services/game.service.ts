import { Injectable } from "@angular/core";
import { Firestore } from "@angular/fire/firestore";
import { writeBatch } from "firebase/firestore";
import { first } from "rxjs";
import { ElementState } from "../db/elements";
import { DbService } from "./db.service";
import { Figure } from "../db/figure";

@Injectable({
  providedIn: "root",
})
export class GameService {
  constructor(private db: DbService, private firestore: Firestore) {}

  async nextTurnElements(): Promise<void[]> {
    return Promise.all([this.decrementElements()]);
  }

  private decrementElements(): Promise<void> {
    return new Promise((resolve) => {
      const batch = writeBatch(this.firestore);
      this.db
        .getElementCollectionUpdates()
        .pipe(first())
        .subscribe(async (elementDocs) => {
          for (const elementDoc of elementDocs) {
            const data = elementDoc.data();
            if (data.state !== ElementState.INACTIVE) {
              batch.set(elementDoc.ref, { state: data.state - 1 });
            }
          }
          // Note: Batch won't commit offline.
          batch.commit().then(() => {
            resolve();
          });
          // TODO: Only run this if offline.
          resolve();
        });
    });
  }

  /** Next turn for the statuses on a figure. */
  async nextTurnFigure(figure: Figure): Promise<void> {
    for (const status of figure.getStatuses()) {
      if (status.removedOnNextTurn) {
        figure.setStatus(status, false);
      }
    }
    return this.db.saveFigure(figure);
  }
}
