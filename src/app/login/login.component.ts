import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationGuard } from './../authentication.guard';
// import { LoginService } from './../login.service';
import { Component, OnInit, Injectable, forwardRef } from '@angular/core';
import { Router, ActivatedRoute, CanActivate } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Observable, throwError, of } from 'rxjs';
declare var $;



// export class LoginComponent implements OnInit {
//   public isLoggedIn = false;
//   public isLoggedInerror = false;
//   public result;
//   constructor(private login: LoginService, private router: Router) { }
//   post(data) {
//     this.login.addadmin(data).subscribe((data1) => {
//       console.log(data1);
//       let result = data.json();
//       this.result = data;
//       let r = result.status;
//       if (r == "ERROR") {
//         this.isLoggedInerror = true;
//       }
//       else {
//         this.router.navigate(['/customerlist'])
//         sessionStorage.setItem('loggedAdmin', this.result)
//         this.login.setloggedIn(true)


//       }
//     })
//   }

//   ngOnInit() {
//     //  $(".sidebar").css('opacity', '0.6');

//     // $('.header').hide();
//   }

// }

@Injectable({
  providedIn: 'root'
})
export class LoginService1 {
  private damain = "http://localhost:8085";
  private url = `${this.damain}/v1/signin`;

  private headers = new HttpHeaders({ 'content-type': 'application/json' })


  constructor(private httpClient: HttpClient) {
    console.log(this.httpClient)

  }

  signin(credentials): Observable<any> {
    credentials = JSON.stringify(credentials);
    return this.httpClient.post<any>(this.url, credentials, { headers: this.headers })
      .pipe(
        catchError((error) => {
          return of(`##some error ${error}`)

        })
      )
  }
}




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [{
    provide: LoginService1 , useClass: LoginService1
  }]
})

export class LoginComponent implements OnInit {

  constructor(  private loginService: LoginService1) {
      console.log(this);
      
  }

  ngOnInit() {

  }


  login(data) {
    console.log(data)
    this.loginService.signin(data).subscribe(
      (event) => {
        console.dir(event)
      },
      error => console.log(`##somthing went wrong ${error}`)
    )
  }

}


// login service

