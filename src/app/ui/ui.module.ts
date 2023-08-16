import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./button.component";
import { EnemyImageComponent } from "../monster/enemy-image.component";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { ProgressBarComponent } from "./progress-bar.component";

@NgModule({
  declarations: [ButtonComponent, EnemyImageComponent, ProgressBarComponent],
  imports: [
    CommonModule,

    // Bootstrap UI modules that need to be shared.
    ProgressbarModule.forRoot(),
    TypeaheadModule.forRoot(),
  ],
  exports: [
    ButtonComponent,
    EnemyImageComponent,
    ProgressBarComponent,
    ProgressbarModule,
    TypeaheadModule,
  ],
})
export class UiModule {}
