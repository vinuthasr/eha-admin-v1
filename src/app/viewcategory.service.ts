
import { BaseURL } from './../common';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';




import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ViewcategoryService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' })
  // private options = new RequestOptions({ headers: this.headers })
  private userdata = [];
  private LOG = console.warn;
  constructor(private http: Http, private router: Router, private httpclient: HttpClient) { }

  updatecategory(info) {
    console.log(info)
    return this.http.put(BaseURL + "/v1/category/", info).subscribe(result => {
      this.router.navigate(['/view-category'])

    }, error => console.log('there was an error:', error));
  }


  delete(id) {
    return this.http.delete(BaseURL + "/v1/category/data/" + id)


  }



  getcategory() {
    let url = BaseURL + "/v1/category/all";
    return this.httpclient.get(url)




  }
}


