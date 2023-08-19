import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ParfumService } from '../parfum.service';
import { Product } from '../entities';

@Component({
  selector: 'app-form-parfum',
  templateUrl: './form-parfum.component.html',
  styleUrls: ['./form-parfum.component.css']
})
export class FormParfumComponent {
  constructor(private service: ParfumService) { }
  @Input()
   product: Product = { label: '', basePrice: 0.0, description: '', picture: '',idShop:0 };


   @Output()
   added = new EventEmitter<Product>();

   OnSubmit() {

     this.added.emit(this.product);
   }

}
