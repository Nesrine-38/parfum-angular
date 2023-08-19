import { Component, Input} from '@angular/core';
import { OrderItem } from '../entities';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent {
  @Input({ required: true })
  orderItem: OrderItem;
  quantity = 0;

}
