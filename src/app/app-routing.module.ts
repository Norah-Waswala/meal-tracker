import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { MealsComponent } from './meals/meals.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { MealsComponent } from './meals/meals.component';
const routes: Routes = [
  { path: 'meals', component: MealsComponent},
  { path: 'about', component: AboutComponent},
  { path:'**', component:NotFoundComponent},

  { path: '', redirectTo:"/meals", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
