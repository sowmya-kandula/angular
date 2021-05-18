import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamerasComponent } from './cameras/cameras.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PagenotComponent } from './pagenot/pagenot.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { SampleComponent } from './sample/sample.component';
import { TvsComponent } from './tvs/tvs.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'sample',component:SampleComponent},
  {path:'users',component:UsersComponent},
  {path:'users/:id',component:UserDetailsComponent},
  {path:'products',component:ProductsComponent,children:[
    {path:"mobiles",component:MobilesComponent},
    {path:"cameras",component:CamerasComponent},
    {path:"tvs",component:TvsComponent},
    {path:"",redirectTo:"/products/mobiles",pathMatch:"full"}
  ]},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:"**",component:PagenotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
