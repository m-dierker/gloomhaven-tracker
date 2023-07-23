import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PartyLayoutComponent } from "./party-layout.component";
import { PartyElementTrackerPageComponent } from "./elements/party-element-tracker-page.component";
import { PartyCharacterComponent } from "./party-character.component";
import { PartyMonstersPageComponent } from "./party-monsters-page.component";
import { SelectPartyComponent } from "./select-party.component";
import { AuthGuard } from "../auth/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: PartyLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      // TODO: Change this to be all monsters page.
      { path: "", component: PartyCharacterComponent },
      { path: "elements", component: PartyElementTrackerPageComponent },
      { path: "monsters", component: PartyMonstersPageComponent },
      { path: "select", component: SelectPartyComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartyRoutingModule {}
