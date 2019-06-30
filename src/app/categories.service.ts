

import { BaseURL } from './../common';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})

export class CategoriesService {
  private headers = new Headers({'Content-Type' :'application/json'})
  private options = new RequestOptions({headers: this.headers})
  private userdata=[]; 

  constructor(private http: Http,private router:Router) { }


  getcategory(){
    let url = BaseURL+ "/v1/category/all";
    return this.http.get(url,{ headers: this.headers}).map(data => {
      let res = data;
       console.log(res); 
       return res;
  })
}

updatecategory(info) {
  console.log(info)
  return this.http.put(BaseURL + "/v1/category/", info).subscribe(result => {
    this.router.navigate(['/view-category'])

  }, error => console.log('there was an error:', error));
}


delete(id) {
  return this.http.delete(BaseURL + "/v1/category/data/" + id)


}

}
