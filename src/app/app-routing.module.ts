import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleParfumComponent } from './single-parfum/single-parfum.component';
import { CardComponent } from './card/card.component';
import { FormParfumComponent } from './form-parfum/form-parfum.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'single-parfum/:id', component: SingleParfumComponent },
  { path: 'form-parfum', component: FormParfumComponent },
  { path: 'shop/:id', component: ShopComponent },
  { path: 'shop', component: ShopComponent },
  {path:'cart', component: CardComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
