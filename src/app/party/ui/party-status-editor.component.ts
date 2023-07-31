import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Figure } from "src/app/db/figure";
import { DbService } from "src/app/services/db.service";
import { StatusEffect } from "src/types/status";

@Component({
  selector: "app-party-status-editor",
  templateUrl: "./party-status-editor.component.html",
  styleUrls: ["./party-status-editor.component.scss"],
})
export class PartyStatusEditorComponent {
  @Input() public figure: Figure;
  allStatuses: StatusEffect[] = [];

  @Output() public statusChanged = new EventEmitter<void>();

  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.db.getParty().subscribe((party) => {
      this.allStatuses = StatusEffect.getAllStatuses(
        party.gamebox,
        this.figure.type
      );
    });
  }

  toggleStatus(status: StatusEffect) {
    if (this.figure.hasStatus(status)) {
      this.figure.setStatus(status, false);
    } else {
      this.figure.setStatus(status, true);
    }
    this.db.saveFigure(this.figure);
    this.statusChanged.emit();
  }
}
