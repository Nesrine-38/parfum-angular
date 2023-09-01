import { Component, OnInit } from '@angular/core';
import { Product, Shop } from '../entities';
import { ParfumService } from '../parfum.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list: Product[] = [];
  listshop: Shop[] = [];
  selected: Shop;
 

  constructor(private service: ParfumService) { }

  ngOnInit(): void {
    this.service.fetchAllShop()
      .subscribe(data => this.listshop = data);

  }
  toList(product: Product) {
    this.service.add(product)
      .subscribe(data => this.list.push(data));
  }
  choisir() {
    this.service.findByShop(this.selected)
      .subscribe(data => this.list = data);

  }



}
