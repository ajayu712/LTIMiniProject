import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditdetComponent } from './editdet/editdet.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'edit/:id', component: EditdetComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
