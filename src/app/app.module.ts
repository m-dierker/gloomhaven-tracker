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
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import {
  enableMultiTabIndexedDbPersistence,
  Firestore,
  getFirestore,
  provideFirestore,
} from "@angular/fire/firestore";
import { LoginComponent } from "./ui/login.component";
import { Auth, provideAuth } from "@angular/fire/auth";
import { getAuth } from "firebase/auth";
import { BossCellComponent } from "./display/boss-cell.component";
import { MonsterAttackDeckDisplayComponent } from "./monster/attack-deck/monster-attack-deck-display.component";
import { MonsterAttackDeckCardComponent } from "./monster/attack-deck/monster-attack-deck-card.component";
import { AppBootstrap } from "./services/bootstrap";
import { AdminComponent } from "./admin/admin.component";
import { MonsterAbilityDisplayComponent } from "./monster/ability-deck/monster-ability-display.component";
import { MonsterAbilityDeckComponent } from "./monster/ability-deck/monster-ability-deck.component";
import { PartyModule } from "./party/party.module";
import { ElementTrackerModule } from "./elements/element-tracker.module";
import { UiModule } from "./ui/ui.module";
import { MapViewComponent } from './mapviewdemo/map-view.component';
import { MapTileComponent } from './mapviewdemo/map-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    MonsterCellComponent,
    MonsterNameComponent,
    PartyManagerComponent,
    LoginComponent,
    BossCellComponent,
    MonsterAttackDeckDisplayComponent,
    MonsterAttackDeckCardComponent,
    AdminComponent,
    MonsterAbilityDisplayComponent,
    MonsterAbilityDeckComponent,
    MapViewComponent,
    MapTileComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,

    // Local modules
    PartyModule,
    ElementTrackerModule,
    UiModule,

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
