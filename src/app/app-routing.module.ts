import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//FIXME
import { LostItemsComponent } from './components/lost-items.component';
import { FoundItemsComponent } from './components/found-items.component';
import { ItemDetailComponent } from './components/item-detail.component';
//import { HeroesComponent }      from './heroes.component';
//import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'lost', component: LostItemsComponent },
  { path: 'found', component: FoundItemsComponent },
  { path: 'detail/:id', component: ItemDetailComponent },
  //FIXME
  //{ path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }