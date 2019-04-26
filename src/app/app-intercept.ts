import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpXsrfTokenExtractor,
    HttpHeaders,
  } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class HttpXsrfInterceptor implements HttpInterceptor {

  constructor(private tokenExtractor: HttpXsrfTokenExtractor,
    private cookieService: CookieService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     const cookie = this.cookieService.get('XSRF-TOKEN');
    request = request.clone({
      headers: new HttpHeaders({
        'XSRF-TOKEN': cookie,
        
      }),
        withCredentials: true
    });
    return next.handle(request);
}
}