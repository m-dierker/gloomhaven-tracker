import { Injectable } from "@angular/core";
import { Auth } from "@angular/fire/auth";
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthGuard  {
  constructor(private auth: Auth, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise((resolve) => {
      const unsub = this.auth.onAuthStateChanged((user) => {
        unsub();
        if (user) {
          resolve(true);
        } else {
          this.router.navigate(["/login"]);
          resolve(false);
        }
      });
    });
  }
}
