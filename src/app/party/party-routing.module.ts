import { RouterModule, Routes } from "@angular/router";
import { PartyTestComponent } from "./party-test.component";
import { NgModule } from "@angular/core";
import { PartyTest2Component } from "./party-test2.component";
import { PartyLayoutComponent } from "./party-layout.component";
import { PartyElementTrackerComponent } from "./elements/party-element-tracker.component";
import { PartyElementTrackerPageComponent } from "./elements/party-element-tracker-page.component";

const routes: Routes = [
  {
    path: "",
    component: PartyLayoutComponent,
    children: [
      { path: "", component: PartyTestComponent },
      { path: "elements", component: PartyElementTrackerPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartyRoutingModule {}
