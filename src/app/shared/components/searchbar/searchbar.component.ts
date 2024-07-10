import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss',
})
export class SearchbarComponent {
  emailFormControl = new FormControl('');
  searchText?: string;

  constructor(private router: Router) {}

  onSearch(searchText: string) {
    this.searchText = searchText;
    if (searchText) {
      this.router.navigate(['search'], { queryParams: { input: searchText } });
    }
  }
}
