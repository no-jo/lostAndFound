import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FoundItemsComponent } from './components/found-items.component'
import { LostItemsComponent } from './components/lost-items.component'

@NgModule({
  declarations: [
    AppComponent,
    FoundItemsComponent,
    LostItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
