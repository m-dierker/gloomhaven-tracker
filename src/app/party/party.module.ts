import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PartyNavbarComponent } from "./party-navbar.component";
import { PartyTestComponent } from "./party-test.component";
import { PartyRoutingModule } from "./party-routing.module";
import { PartyTest2Component } from "./party-test2.component";
import { PartyLayoutComponent } from "./party-layout.component";
import { PartyMonstersComponent } from "./party-monsters.component";
import { PartyHeaderComponent } from "./ui/party-header.component";
import { PartyElementTrackerPageComponent } from "./elements/party-element-tracker-page.component";
import { PartyElementTrackerCellComponent } from "./elements/party-element-tracker-cell.component";
import { ElementTrackerModule } from "../elements/element-tracker.module";

@NgModule({
  declarations: [
    PartyNavbarComponent,
    PartyTestComponent,
    PartyTest2Component,
    PartyLayoutComponent,
    PartyMonstersComponent,
    PartyHeaderComponent,
    PartyElementTrackerPageComponent,
    PartyElementTrackerCellComponent,
    PartyElementTrackerCellComponent,
  ],
  imports: [CommonModule, PartyRoutingModule, ElementTrackerModule],
})
export class PartyModule {}
