import { AddproductService } from './../addproduct.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbulk',
  templateUrl: './addbulk.component.html',
  styleUrls: ['./addbulk.component.css']
})
export class AddbulkComponent implements OnInit {

  constructor(private add:AddproductService,private router:Router) { }
  files: any[];

  public fileEvent(ref) {
    // debugger
    const fileSelected: File = ref.files[0];

    this.add.uploadFile(fileSelected)
    .subscribe((response) => {
       alert("file upload suceessfully")
       this.router.navigate(['/products'])
       return response;
     },
      (error) => {
        alert('error while uploading file');
      });
      
 }
  ngOnInit() {
  }

}
