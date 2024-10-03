import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() placeholder: string = 'Search...';  
  searchTerm: string = '';

  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();

  onSearchChange() {
    this.searchChange.emit(this.searchTerm); 
  }
}
