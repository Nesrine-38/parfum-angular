import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListParfumComponent } from './list-parfum/list-parfum.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SingleParfumComponent } from './single-parfum/single-parfum.component';
import { CardComponent } from './card/card.component';
import { OptionsComponent } from './options/options.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { FooterComponent } from './footer/footer.component';
import { FormParfumComponent } from './form-parfum/form-parfum.component';
import { SearchComponent } from './search/search.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListParfumComponent,
    SingleParfumComponent,
    CardComponent,
    OptionsComponent,
    OrderItemComponent,
    FooterComponent,
    FormParfumComponent,
    SearchComponent,
    ShopComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
