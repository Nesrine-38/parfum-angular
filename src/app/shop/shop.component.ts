import { Component, Input, Output } from '@angular/core';
import { Shop } from '../entities';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  @Input({required:true})
  listshop :Shop[]=[];

  @Output()
  selected :Shop;
}
