import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 public isLoggedIn=false;
 public isLoggedInerror=false;
  constructor(private login:LoginService,private router:Router) { }
post(data){
this.login.addadmin(data).subscribe((data)=>{
  
let result= data.json()
sessionStorage.setItem('logincustomer',JSON.stringify(result));
let r=result.status;
if( r=="ERROR"){
  this.isLoggedInerror=true
}
else{
 
this.router.navigate(['/customerlist'])
   
}
})
}

  ngOnInit() {
    // $(".sidebar").css('opacity', '0.6');

    // $('.header').hide();
  }

}
