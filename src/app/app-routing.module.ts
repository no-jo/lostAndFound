import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LostItemsComponent } from './components/lost-items.component';
import { FoundItemsComponent } from './components/found-items.component';
import { ItemDetailComponent } from './components/item-detail.component';
import { WelcomeComponent } from './components/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'lost', component: LostItemsComponent },
  { path: 'found', component: FoundItemsComponent },
  { path: 'detail/:id', component: ItemDetailComponent },
  { path: 'welcome', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
