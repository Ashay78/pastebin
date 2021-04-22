import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPastebinComponent } from './new-pastebin/new-pastebin.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { GetPastebinComponent } from './get-pastebin/get-pastebin.component';
import {HttpClientModule} from '@angular/common/http';
import { PageComponent } from './page/page.component';
import {EmitterService} from '../services/emitter.service';

@NgModule({
  declarations: [
    AppComponent,
    NewPastebinComponent,
    HeaderComponent,
    GetPastebinComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MonacoEditorModule.forRoot()
  ],
  providers: [
    EmitterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
