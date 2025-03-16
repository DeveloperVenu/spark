import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from '../../service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  detailslist: any = [];
  castResults: any = [];
  videoResults: any=[]
  constructor(
    private service: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'paramId');
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getCast(getParamId);
  }
  getMovie(id: any) {
    this.service.movieDetails(id).subscribe((res) => {
      console.log(res, 'details');
      this.detailslist = res;
    });
  }
  getVideo(id: any) {
    this.service.movieVideo(id).subscribe((res) => {
      console.log(res, 'video');
      res.results.forEach((element:any) => {
        if (element.type == "Teaser")
        {
          this.videoResults=element.key
          }
      });
      this.videoResults = res.results;
    });
  }
  getCast(id: any) {
    this.service.movieaCast(id).subscribe((res) => {
      console.log(res, 'cast');
      this.castResults = res.cast;
    });
  }
}
