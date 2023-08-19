import { Component, OnInit } from '@angular/core';
import { Options, OrderItem, Product } from '../entities';
import { ParfumService } from '../parfum.service';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
   product : OrderItem[] = [];
   options: Options[] = [];

  constructor(private cardService : CardService) { }

  ngOnInit(): void {
    this.cardService.getProduct()
    .subscribe(res=>{
      this.product = res;
    })
  }
removeItemFromCart(product: any) {
  this.cardService.removeCartItem(product);
}
  emptycart(){
    this.cardService.removeAllCart();
  }
  total() {
    // let price = this.orderItem.quantity * this.orderItem.itemPrice;
    // for (const item of this.options) {
    //   price += item.price;
    // }
    // return price;
    return 10
  }
}
