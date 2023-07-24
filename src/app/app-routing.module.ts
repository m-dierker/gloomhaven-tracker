import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { DisplayComponent } from "./display/display.component";
import { MonsterAbilityDisplayComponent } from "./monster/ability-deck/monster-ability-display.component";
import { MonsterAttackDeckDisplayComponent } from "./monster/attack-deck/monster-attack-deck-display.component";
import { PartyManagerComponent } from "./party/party-manager.component";
import { SelectPartyComponent } from "./party/select-party.component";
import { LoginComponent } from "./ui/login.component";
import { RedirectToNewUiComponent } from "./ui/redirect-to-new-ui.component";

const routes: Routes = [
  {
    path: "display",
    component: DisplayComponent,
  },
  {
    path: "monsterattacks",
    component: MonsterAttackDeckDisplayComponent,
  },
  {
    path: "monsterabilities",
    component: MonsterAbilityDisplayComponent,
  },
  {
    path: "",
    component: RedirectToNewUiComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "admin",

    component: AdminComponent,
  },
  {
    path: "party",
    loadChildren: () =>
      import("./party/party.module").then((m) => m.PartyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
