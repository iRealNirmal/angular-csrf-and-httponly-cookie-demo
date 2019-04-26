import { Component, OnInit } from '@angular/core';
import { CreditCardValidator } from 'angular-cc-library';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  EmailValidator,
} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-cc-lib';
  form:FormGroup;
  constructor(
    private _fb: FormBuilder,
    private httpClient : HttpClient,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.form = this._fb.group({
      creditCard: ['', [<any>CreditCardValidator.validateCCNumber]],
      expirationDate: ['', [<any>CreditCardValidator.validateExpDate]],
      cvc: ['', [<any>Validators.required, <any>Validators.minLength(3), <any>Validators.maxLength(4)]] 
    });
    let postData = {
      "name": "Customer004",
      "email": "customer004@email.com",
      "tel": "0000252525"
}

let a = this.httpClient.get('http://localhost:5000/api/v1/todos').subscribe((res)=>{
  this.httpClient.post('http://localhost:5000/api/v1/todos', postData).subscribe((res)=>{
      console.log(res);
  });
});
    
  }

  
}

