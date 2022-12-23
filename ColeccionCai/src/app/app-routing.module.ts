import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCamisetaComponent } from './components/add-camiseta/add-camiseta.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'add', component: AddCamisetaComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
