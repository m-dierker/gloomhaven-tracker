import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  Auth,
  authState,
  signInAnonymously,
  signOut,
  User,
  GoogleAuthProvider,
  signInWithPopup,
} from "@angular/fire/auth";
import { Router } from "@angular/router";
import { signInWithRedirect } from "firebase/auth";
import { Subscription } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  private user$: Subscription;

  constructor(private auth: Auth, private router: Router) {}

  ngOnInit(): void {
    let nullUserSeen = false;
    this.user$ = authState(this.auth).subscribe((user) => {
      console.log("user", user);
      if (!user) {
        nullUserSeen = true;
        return;
      }
      // bootstrap.ts doesn't currently work with in-page login. Refresh is needed.
      if (nullUserSeen) {
        window.location.reload();
        return;
      }
      this.router.navigateByUrl("/");
    });
  }

  ngOnDestroy(): void {
    this.user$.unsubscribe();
  }

  login() {
    signInWithPopup(this.auth, new GoogleAuthProvider());
  }
}
