import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// all components imports
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { CareersComponent } from './careers/careers.component';


const appRoutes:Routes = [
  {path:"" , pathMatch:'full', redirectTo:'home'},
  {path:"home" , component:HomeComponent},
  {path:"aboutus" , component:AboutComponent},
  {path:"services" , component:ServicesComponent},
  {path:"careers" , component:CareersComponent},
  {path:"contact" , component:ContactComponent},
  {path:"**" , redirectTo:'404.html'},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRouterModule { }
