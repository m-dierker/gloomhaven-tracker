import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./button.component";
import { EnemyImageComponent } from "../monster/enemy-image.component";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { RedirectToNewUiComponent } from './redirect-to-new-ui.component';

@NgModule({
  declarations: [ButtonComponent, EnemyImageComponent, RedirectToNewUiComponent],
  imports: [
    CommonModule,

    // Bootstrap UI modules that need to be shared.
    ProgressbarModule.forRoot(),
    TypeaheadModule.forRoot(),
  ],
  exports: [
    ButtonComponent,
    EnemyImageComponent,
    ProgressbarModule,
    TypeaheadModule,
  ],
})
export class UiModule {}
