import { Injectable, Inject, InjectionToken } from '@angular/core';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';


import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppInterceptorService implements HttpInterceptor {

  private access_token : any = '';

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Get the auth token from the service.
     this.access_token = this.auth.getAuthorizationToken();

    request = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${this.access_token}`)
    });

    return next.handle(request);
  }




}