import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { AppComponent } from './app.component';
import { FoundItemsComponent } from './components/found-items.component';
import { LostItemsComponent } from './components/lost-items.component';
import { ItemDetailComponent } from './components/item-detail.component';
import { ItemDetailModalComponent } from './components/item-detail-modal.component';
import { AddItemModalComponent } from './components/add-item-modal.component';

import { ItemService } from './services/item.service';

@NgModule({
  declarations: [
    AppComponent,
    FoundItemsComponent,
    LostItemsComponent,
    ItemDetailComponent,
    ItemDetailModalComponent,
    AddItemModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
