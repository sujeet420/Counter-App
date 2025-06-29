import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import here new module 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import {HttpClientModule} from '@angular/common/http';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [ 
    AppComponent, CounterComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
