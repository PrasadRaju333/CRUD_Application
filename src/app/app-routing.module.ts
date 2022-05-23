import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { InsertComponent } from './insert/insert.component';

const routes: Routes = [
  {path:'',component:DataComponent},
  {path:'add',component:InsertComponent},
  {path:'edit/:id',component:InsertComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
