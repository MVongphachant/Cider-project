import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, take } from "rxjs/operators";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next:HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(userData => {
        if (!userData) {
          return next.handle(req);
        }

        const authReq = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${userData._token}`)
        })
        
        return next.handle(authReq);
      }))
  }

}
