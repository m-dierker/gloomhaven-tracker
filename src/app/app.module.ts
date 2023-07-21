import { BrowserModule } from "@angular/platform-browser";
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  APP_INITIALIZER,
} from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DisplayComponent } from "./display/display.component";
import { MonsterCellComponent } from "./display/monster-cell.component";
import { MonsterNameComponent } from "./display/monster-name.component";
import { PartyManagerComponent } from "./party/party-manager.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PartyMonsterCellComponent } from "./party/party-monster-cell.component";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import {
  enableMultiTabIndexedDbPersistence,
  Firestore,
  getFirestore,
  provideFirestore,
} from "@angular/fire/firestore";
import { ElementTrackerComponent } from "./display/elements/element-tracker.component";
import { ElementTrackerCellComponent } from "./display/elements/element-tracker-cell.component";
import { PartyElementTrackerComponent } from "./party/elements/party-element-tracker.component";
import { PartyElementTrackerCellComponent } from "./party/elements/party-element-tracker-cell.component";
import { LoginComponent } from "./ui/login.component";
import { ButtonComponent } from "./ui/button.component";
import { Auth, provideAuth } from "@angular/fire/auth";
import { getAuth } from "firebase/auth";
import { PartyRoleHeaderComponent } from "./party/party-role-header.component";
import { PartyMonsterTrackerComponent } from "./party/party-monster-tracker.component";
import { PartyAddMonsterComponent } from "./party/party-add-monster.component";
import { BossCellComponent } from "./display/boss-cell.component";
import { MonsterAttackDeckDisplayComponent } from "./monster/attack-deck/monster-attack-deck-display.component";
import { MonsterAttackDeckCardComponent } from "./monster/attack-deck/monster-attack-deck-card.component";
import { AppBootstrap } from "./services/bootstrap";
import { AdminComponent } from "./admin/admin.component";
import { MonsterAbilityDisplayComponent } from "./monster/ability-deck/monster-ability-display.component";
import { MonsterAbilityDeckComponent } from "./monster/ability-deck/monster-ability-deck.component";
import { PartyMonsterNameComponent } from "./party/party-monster-name.component";
import { PartyMonsterTokenComponent } from "./party/party-monster-token.component";
import { EnemyImageComponent } from "./monster/enemy-image.component";
import { SelectPartyComponent } from "./party/select-party.component";

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    MonsterCellComponent,
    MonsterNameComponent,
    PartyManagerComponent,
    PartyMonsterCellComponent,
    ElementTrackerComponent,
    ElementTrackerCellComponent,
    PartyElementTrackerComponent,
    PartyElementTrackerCellComponent,
    LoginComponent,
    ButtonComponent,
    PartyRoleHeaderComponent,
    PartyMonsterTrackerComponent,
    PartyAddMonsterComponent,
    BossCellComponent,
    MonsterAttackDeckDisplayComponent,
    MonsterAttackDeckCardComponent,
    AdminComponent,
    MonsterAbilityDisplayComponent,
    MonsterAbilityDeckComponent,
    PartyMonsterNameComponent,
    PartyMonsterTokenComponent,
    EnemyImageComponent,
    SelectPartyComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,

    // UI Modules
    ProgressbarModule.forRoot(),
    TypeaheadModule.forRoot(),

    // AngularFire
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => {
      const firestore = getFirestore();
      // enableMultiTabIndexedDbPersistence(firestore).then(() =>
      //   console.log("offline persistence enabled")
      // );
      return firestore;
    }),
    provideAuth(() => {
      const auth = getAuth();
      // TODO: Do this for offline sometime.
      // if (environment.useEmulators) {
      //   connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
      // }
      return auth;
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: AppBootstrap.bootstrap,
      // deps must exactly match AppBootstrap.bootstrap args.
      deps: [Firestore, Auth],
      // This is only when multiple APP_INITIALIZERs are used.
      // I don't think it's strictly necessary here.
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
