import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PartyNavbarComponent } from "./party-navbar.component";
import { PartyRoutingModule } from "./party-routing.module";
import { PartyLayoutComponent } from "./party-layout.component";
import { PartyMonstersComponent } from "./party-monsters.component";
import { PartyHeaderComponent } from "./ui/party-header.component";
import { PartyElementTrackerPageComponent } from "./elements/party-element-tracker-page.component";
import { PartyElementTrackerCellComponent } from "./elements/party-element-tracker-cell.component";
import { ElementTrackerModule } from "../elements/element-tracker.module";
import { UiModule } from "../ui/ui.module";
import { PartyCharacterComponent } from "./party-character.component";
import { PartyRoleHeaderComponent } from "./party-role-header.component";
import { PartyMonstersPageComponent } from './party-monsters-page.component';

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
    PartyMonstersPageComponent,
  ],
  imports: [CommonModule, PartyRoutingModule, ElementTrackerModule, UiModule],
})
export class PartyModule {}
