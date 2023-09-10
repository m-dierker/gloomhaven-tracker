import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PartyNavbarComponent } from "./party-navbar.component";
import { PartyRoutingModule } from "./party-routing.module";
import { PartyLayoutComponent } from "./party-layout.component";
import { PartyHeaderComponent } from "./ui/party-header.component";
import { PartyElementTrackerPageComponent } from "./elements/party-element-tracker-page.component";
import { PartyElementTrackerCellComponent } from "./elements/party-element-tracker-cell.component";
import { ElementTrackerModule } from "../elements/element-tracker.module";
import { UiModule } from "../ui/ui.module";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { SelectPartyComponent } from "./select-party.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { PartyMenuComponent } from "./party-menu.component";
import { PartyCharacterComponent } from "./characters/party-character-page.component";
import { PartyCreateCharacterComponent } from "./characters/party-create-character.component";
import { PartyAddMonsterComponent } from "./monsters/add/party-add-monster.component";
import { PartyMonsterCellComponent } from "./monsters/party-monster-cell.component";
import { PartyMonsterNameComponent } from "./monsters/party-monster-name.component";
import { PartyMonsterTokenComponent } from "./monsters/party-monster-token.component";
import { PartyMonstersPageComponent } from "./monsters/party-monsters-page.component";
import { PartyMonstersComponent } from "./monsters/party-monsters.component";
import { PartyRoleHeaderComponent } from "./ui/party-role-header.component";
import { PartyStatusEditorComponent } from "./ui/party-status-editor.component";
import { NextTurnButtonComponent } from "./ui/next-turn-button.component";

@NgModule({
  declarations: [
    PartyNavbarComponent,
    PartyLayoutComponent,
    PartyMonstersComponent,
    PartyHeaderComponent,
    PartyElementTrackerPageComponent,
    PartyElementTrackerCellComponent,
    PartyElementTrackerCellComponent,
    PartyCharacterComponent,
    PartyRoleHeaderComponent,
    PartyMonsterCellComponent,
    PartyMonstersPageComponent,
    PartyMonsterNameComponent,
    PartyMonsterTokenComponent,
    SelectPartyComponent,
    PartyAddMonsterComponent,
    PartyMenuComponent,
    PartyCreateCharacterComponent,
    PartyStatusEditorComponent,
    NextTurnButtonComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,

    // Other parts of app.
    PartyRoutingModule,
    ElementTrackerModule,
    UiModule,
  ],
})
export class PartyModule {}
