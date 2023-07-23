import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ElementTrackerComponent } from "./element-tracker.component";
import { ElementTrackerCellComponent } from "./element-tracker-cell.component";

@NgModule({
  declarations: [ElementTrackerComponent, ElementTrackerCellComponent],
  imports: [CommonModule],
  exports: [ElementTrackerComponent],
})
export class ElementTrackerModule {}
