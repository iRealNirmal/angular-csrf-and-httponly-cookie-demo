import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditCardDirectivesModule } from 'angular-cc-library';

import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpXsrfInterceptor } from './app-intercept';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, CreditCardDirectivesModule, ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    CookieService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpXsrfInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
