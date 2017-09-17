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
import { WelcomeComponent } from './components/welcome.component';
import { UserComponent } from './components/user.component';
import { AddUserModalComponent } from './components/add-user-modal.component';

import { ItemService } from './services/item.service';
import { UserService } from './services/user.service';
import { MetadataService } from './services/metadata.service';

@NgModule({
  declarations: [
    AppComponent,
    FoundItemsComponent,
    LostItemsComponent,
    ItemDetailComponent,
    ItemDetailModalComponent,
    AddItemModalComponent,
    WelcomeComponent,
    UserComponent,
    AddUserModalComponent,
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
  providers: [ItemService, MetadataService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
