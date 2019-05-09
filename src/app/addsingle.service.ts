import { BaseURL } from './../common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';   
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})
export class AddsingleService { 
           
  public  userURL = BaseURL+ "/v1";
  public headers = new Headers({'Content-Type':'application/json'});
  public options = new RequestOptions({headers: this.headers})
  public userdata=[]; 
  

  constructor(private http: Http, private router: Router, private route: ActivatedRoute,) { }

  public addsingle(data) 
  {
    console.log(data)
    let promise = new Promise((resolve, reject) => {
    return this.http.post( this.userURL+'/addproduct', JSON.stringify(data), { headers: this.headers}).toPromise() .then(
      (res:Response) => { 
      console.log(res)
        this.userdata = res.json();
     console.log(this.userdata);
        console.log(this.userdata['status']);
      
    
        if(this.userdata['status'] == "SUCCESS")  
        {
          this.router.navigate(['/products'])
         
        }
        else
        {     
        
        }
       
      })
    })
  }
}