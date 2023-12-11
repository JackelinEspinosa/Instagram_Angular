// search.component.ts

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm: string = '';
  searchResults: any[] = [];  // Debes definir la estructura de tus resultados

  @Output() searchEvent = new EventEmitter<string>();

  search() {
    // la lógica de búsqueda y actualizar searchResults


    // Esto es solo un ejemplo.
    this.searchResults = [
      { name: 'Usuario 1', imageUrl: 'url-imagen-1.jpg' },
      { name: 'Usuario 2', imageUrl: 'url-imagen-2.jpg' },
      { name: 'otros', imageUrl: 'otros.jpg' },
      
    ];

    this.searchEvent.emit(this.searchTerm);
  }
}
