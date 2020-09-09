import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditdetComponent } from './editdet/editdet.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditdetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    OrderModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
