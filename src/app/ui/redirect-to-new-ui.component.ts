import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-redirect-to-new-ui",
  templateUrl: "./redirect-to-new-ui.component.html",
  styleUrls: ["./redirect-to-new-ui.component.scss"],
})
export class RedirectToNewUiComponent implements OnInit {
  constructor(private router: Router) {
    this.router.navigateByUrl("/party");
  }

  ngOnInit(): void {}
}
