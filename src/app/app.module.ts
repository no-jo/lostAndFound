import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FoundItemsComponent } from './components/found-items.component';
import { LostItemsComponent } from './components/lost-items.component';
import { ItemDetailComponent } from './components/item-detail.component';

import { ItemService } from './services/item.service';

import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FoundItemsComponent,
    LostItemsComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,

    FormsModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
