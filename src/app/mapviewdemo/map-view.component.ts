import { Component, OnInit } from "@angular/core";
import { MAP_DATA } from "./map_data";

// Summary: The data is just not accurate enough. Even with repositioning,
// the X/Y on scenario 0 is just so far off that it's not possible to do it well.
@Component({
  selector: "app-map-view",
  templateUrl: "./map-view.component.html",
  styleUrls: ["./map-view.component.scss"],
})
export class MapViewComponent implements OnInit {
  scenarioData: any;
  xInc: number = 0;
  yInc: number = 0;

  constructor() {}

  ngOnInit(): void {
    const scenarioData = MAP_DATA["0"];
    this.scenarioData = scenarioData;

    // Shift the start point to 0,0 for lower right quadrant.
    const minX = Math.min(...scenarioData.layout.map((t) => t.center.x));
    const maxY = Math.max(...scenarioData.layout.map((t) => t.center.y));

    this.xInc = minX * -1;
    this.yInc = maxY * -1;
  }
}
