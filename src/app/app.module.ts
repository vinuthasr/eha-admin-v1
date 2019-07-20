
import { Http, HttpModule } from '@angular/http';
import { AuthenticationGuard } from './authentication.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, PathLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductOrdersComponent } from './product-orders/product-orders.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { AuthDirective } from './auth.directive';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { AddbannerComponent } from './addbanner/addbanner.component';
import { ViewbannerComponent } from './viewbanner/viewbanner.component';
import { UpdateComponent } from './update/update.component';
import { AddimageComponent } from './addimage/addimage.component';
import { ViewimageComponent } from './viewimage/viewimage.component';
import { UpdateimageComponent } from './updateimage/updateimage.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AddbulkComponent } from './addbulk/addbulk.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DikshaComponent } from './diksha/diksha.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { TestComponent } from './test/test.component';
import { MatTableModule } from '@angular/material/table';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import { CdkTableModule } from '@angular/cdk/table';
import { Test1Component } from './test1/test1.component';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    CategoriesComponent,
    ProductsComponent,
    AddProductsComponent,
    CustomersComponent,
    ProductOrdersComponent,
    AccountComponent,
    LoginComponent,
    AuthDirective,
    AddcategoryComponent,
    ViewcategoryComponent,
    UpdatecategoryComponent,
    AddbannerComponent,
    ViewbannerComponent,
    UpdateComponent,
    AddimageComponent,
    ViewimageComponent,
    UpdateimageComponent,
    ViewproductComponent,
    AddbulkComponent,
    UpdateproductComponent,
    CustomerlistComponent,
    DikshaComponent,
    TestComponent,
    Test1Component,

  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule, HttpModule, BrowserAnimationsModule,
    HttpClientModule, Ng4LoadingSpinnerModule.forRoot(),
    MatTableModule, MatCheckboxModule, MatFormFieldModule, CdkTableModule,MatSelectModule,MatInputModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }, AuthenticationGuard,
  ],
  bootstrap: [AppComponent]
})  
export class AppModule { }
