import { Component, Input } from "@angular/core";
import { Figure } from "../db/figure";

@Component({
  selector: "app-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.scss"],
})
export class ProgressBarComponent {
  @Input() figure: Figure;

  /** Allows overriding the amount of HP shown. Only shows if not undefined. */
  @Input() healthOverride: number | undefined;

  @Input() showHealth: boolean = true;
}
