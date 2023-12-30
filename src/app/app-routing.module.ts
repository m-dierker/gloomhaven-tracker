import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { DisplayComponent } from "./display/display.component";
import { MonsterAbilityDisplayComponent } from "./monster/ability-deck/monster-ability-display.component";
import { MonsterAttackDeckDisplayComponent } from "./monster/attack-deck/monster-attack-deck-display.component";
import { PartyManagerComponent } from "./party/party-manager.component";
import { SelectPartyComponent } from "./party/select-party.component";
import { LoginComponent } from "./ui/login.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  {
    path: "display",
    component: DisplayComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "monsterattacks",
    component: MonsterAttackDeckDisplayComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "monsterabilities",
    component: MonsterAbilityDisplayComponent,
  },
  {
    path: "",
    redirectTo: "/party/monsters",
    pathMatch: "full",
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
