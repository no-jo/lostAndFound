import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LostItemsComponent } from './components/lost-items.component';
import { FoundItemsComponent } from './components/found-items.component';
import { ItemDetailComponent } from './components/item-detail.component';
import { WelcomeComponent } from './components/welcome.component';
import { UserComponent } from './components/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'lost', component: LostItemsComponent },
  { path: 'found', component: FoundItemsComponent },
  { path: 'detail/:id', component: ItemDetailComponent },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
