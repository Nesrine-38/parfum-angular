import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Options } from '../entities';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {
  @Input({ required: true })
  options: Options [] = [];
  @Output()
  formSubmit = new EventEmitter<Options[]>();

  onSubmit() {
    this.formSubmit.emit(this.options);
  }
}
