
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BaseURL } from './../common';

import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-diksha',
  templateUrl: './diksha.component.html',
  styleUrls: ['./diksha.component.css']
})
export class DikshaComponent implements OnInit {

  SERVER_URL: string = `${BaseURL}/v1/upload`;
  uploadForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }


  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);

    this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}


export const log = console.log;