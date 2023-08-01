import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-map-tile",
  templateUrl: "./map-tile.component.html",
  styleUrls: ["./map-tile.component.scss"],
})
export class MapTileComponent implements OnInit, AfterViewInit {
  @Input() tile: any;
  // Amount to add to start left value at 0.
  @Input() xInc: number;
  // Amount to add to start top value at 0.
  @Input() yInc: number;

  @ViewChild("tile") tileElem: ElementRef;
  @ViewChild("tileImg") tileImg: ElementRef;

  tileCode: string;

  ngOnInit(): void {
    console.log("tile", this.tile);
    this.tileCode = this.tile.name.toLowerCase().replaceAll("-", "");
  }

  ngAfterViewInit(): void {
    const el = this.tileElem.nativeElement as HTMLElement;
    const imgEl = this.tileImg.nativeElement as HTMLElement;
    setTimeout(() => {
      console.log(
        "imgEl.offsetHeight > imgEl.offsetWidth",
        imgEl.offsetHeight,
        imgEl.offsetWidth
      );
      imgEl.classList.add(
        imgEl.offsetHeight > imgEl.offsetWidth ? "vert-larger" : "horz-larger"
      );
    }, 100);

    if (this.tile.orientation) {
      imgEl.style.transform = `rotate(${this.tile.orientation}deg)`;
    }

    el.style.left = `${(this.tile.center.x + this.xInc) * X_PX_MUL}px`;
    el.style.top = `${(this.tile.center.y + this.yInc) * -1 * Y_PX_MUL}px`;
  }
}

const X_PX_MUL = 85;
const Y_PX_MUL = 69;
