import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupermercadoListComponent } from './components/supermercado-list/supermercado-list.component';
import { SupermercadoListModule } from './components/supermercado-list/SupermercadoListModule.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SupermercadoListModule,
    HttpClientModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
