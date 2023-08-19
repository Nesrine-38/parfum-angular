import { Component } from '@angular/core';
import { Product } from '../entities';
import { ParfumService } from '../parfum.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private service: ParfumService) { }

  term: string = '';
  results: Product[] = [];

  doSearch() {
    if (this.term.length < 2) {
      this.results = [];
    } else {
      this.service.search(this.term)
        .subscribe(data => this.results = data);
    }


  }
}
