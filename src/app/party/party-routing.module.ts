import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PartyLayoutComponent } from "./party-layout.component";
import { PartyElementTrackerPageComponent } from "./elements/party-element-tracker-page.component";
import { SelectPartyComponent } from "./select-party.component";
import { AuthGuard } from "../auth/auth.guard";
import { PartyMenuComponent } from "./party-menu.component";
import { PartyCharacterComponent } from "./characters/party-character-page.component";
import { PartyCreateCharacterComponent } from "./characters/party-create-character.component";
import { PartyAddMonsterComponent } from "./monsters/add/party-add-monster.component";
import { PartyMonstersPageComponent } from "./monsters/party-monsters-page.component";

const routes: Routes = [
  {
    path: "",
    component: PartyLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      // TODO: Change this to be all monsters page.
      { path: "", redirectTo: "monsters", pathMatch: "prefix" },
      { path: "character", component: PartyCharacterComponent },
      { path: "character/create", component: PartyCreateCharacterComponent },
      { path: "elements", component: PartyElementTrackerPageComponent },
      { path: "menu", component: PartyMenuComponent },
      {
        path: "monsters",
        component: PartyMonstersPageComponent,
      },
      { path: "monsters/add", component: PartyAddMonsterComponent },
      { path: "select", component: SelectPartyComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartyRoutingModule {}
