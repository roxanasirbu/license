import { NgModule, isDevMode } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [

    AppRoutingModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
