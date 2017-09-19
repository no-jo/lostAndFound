import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
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
import { EditUserModalComponent } from './components/edit-user-modal.component';
import { WishlistComponent } from './components/wishlist.component';

import { ItemService } from './services/item.service';
import { UserService } from './services/user.service';
import { MetadataService } from './services/metadata.service';
import { RequestService } from './services/request.service';

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
    EditUserModalComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
  ],
  providers: [ItemService, MetadataService, UserService, RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
