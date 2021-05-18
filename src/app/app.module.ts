import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { TvsComponent } from './tvs/tvs.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { CamerasComponent } from './cameras/cameras.component';
import { PagenotComponent } from './pagenot/pagenot.component';
import { SampleComponent } from './sample/sample.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailsComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    HomeComponent,
    TvsComponent,
    MobilesComponent,
    CamerasComponent,
    PagenotComponent,
    SampleComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

