import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewPastebinComponent} from './new-pastebin/new-pastebin.component';
import {GetPastebinComponent} from './get-pastebin/get-pastebin.component';

const routes: Routes = [
  { path: 'new',  component: NewPastebinComponent },
  { path: ':key', component: GetPastebinComponent },
  { path: '',   redirectTo: 'new', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
