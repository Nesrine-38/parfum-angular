import { Component, OnInit, Output } from '@angular/core';
import { Options, OrderItem, Product } from '../entities';
import { ActivatedRoute } from '@angular/router';
import { ParfumService } from '../parfum.service';
import { CardService } from '../card.service';

@Component({
  selector: 'app-single-parfum',
  templateUrl: './single-parfum.component.html',
  styleUrls: ['./single-parfum.component.css']
})
export class SingleParfumComponent implements OnInit {

  product: Product;
  editing=false;
  quantity = 0;
  options: Options [] = [];
  constructor(private route: ActivatedRoute, private service: ParfumService, private services:CardService) { }
  orderItem: OrderItem = {
    quantity: 1,
    itemPrice: 0,
    idOrders: 0,
    idProduct: 0,
  };


  ngOnInit(): void {

    this.route.params.subscribe(params =>
      this.service.fetchOne(params['id'])
      .subscribe((data) => {
        this.product = data;
        this.orderItem.itemPrice = data.basePrice;
        this.orderItem.idProduct = data.id!;}));

      this.route.params.subscribe((params) =>
      this.service
        .findByProduct(params['id'])
        .subscribe((data) => (this.options = data))
    );

  }

  updateParfum(product: Product) {
    this.service.update(product).subscribe(data =>{
      this.product = data;
      this.editing=false;
    });
  }

  ajoutAuPanier(item: any){
    this.services.addtoCart(item, this.quantity);
  }

  total() {
    let price = this.orderItem.quantity * this.orderItem.itemPrice;
    for (const item of this.options) {
      price += item.price;
    }
    return price;
  }

}
