import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { GstDetailComponent } from './gst-detail/gst-detail.component';

const routes: Routes = [
  {path: 'input', component: GstAddComponent},
  {path: 'get', component: GstGetComponent},
  {path: 'detail/:_id', component: GstDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
