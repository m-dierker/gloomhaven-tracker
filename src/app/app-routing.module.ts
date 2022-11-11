import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { DisplayComponent } from "./display/display.component";
import { MonsterAbilityDisplayComponent } from "./monster/ability-deck/monster-ability-display.component";
import { MonsterAttackDeckDisplayComponent } from "./monster/attack-deck/monster-attack-deck-display.component";
import { PartyManagerComponent } from "./party/party-manager.component";
import { LoginComponent } from "./ui/login.component";

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
    component: PartyManagerComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "admin",
    component: AdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
