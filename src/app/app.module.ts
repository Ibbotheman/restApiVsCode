import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { HttpClientModule } from '@angular/common/http'; // <-- important module for http

import { AppComponent } from './app.component';
import { RestApiComponent } from './rest-api/rest-api.component';

@NgModule({
  declarations: [
    AppComponent,
    RestApiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule //import here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }