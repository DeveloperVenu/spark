import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from '../../service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchResults: any=[]
  constructor(private service:MovieApiServiceService) {}

  ngOnInit(): void {}

  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });
  submitForm() {
    console.log(this.searchForm.value, 'searchtyping')
    this.service.searchMovie(this.searchForm.value).subscribe((res) => {
      console.log(res, 'searchmovie')
      this.searchResults=res.results
    });
  }
}
