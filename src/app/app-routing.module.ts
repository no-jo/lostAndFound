import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LostItemsComponent } from './components/lost-items.component';
import { FoundItemsComponent } from './components/found-items.component';
import { ItemDetailComponent } from './components/item-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'lost', component: LostItemsComponent },
  { path: 'found', component: FoundItemsComponent },
  { path: 'detail/:id', component: ItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
