import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './familia/contador.reducer';
import { PadreComponent } from './familia/padre/padre.component';
import { HijoComponent } from './familia/hijo/hijo.component';
import { NietoComponent } from './familia/nieto/nieto.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot( { contador: contadorReducer } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
