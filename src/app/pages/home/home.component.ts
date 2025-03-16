import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  upcomingResults: any = [];
  constructor(private service: MovieApiServiceService) {}

  bannerResults: any = [];
  latestResults: any = [];
  actiongenre: any = [];
  adventuregenre: any = [];

  ngOnInit(): void {

    this.getData()
    
  }

  getData() {
    this.bannerData();
    this.latestData();
    this.upcomingData();
    this.actiongdata();
    this.adventuredata();
  }
  // bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((res) => {
      console.log(res, 'bannerDetails');
      this.bannerResults = res.results;
    });
  }
  latestData() {
    this.service.latestMoviesApiData().subscribe((res) => {
      console.log(res, 'latestDetails');
      this.latestResults = res.results;
    });
  }
  upcomingData() {
    this.service.upcomingMoviesApiData().subscribe((res) => {
      console.log(res, 'upcomingDetails');
      this.upcomingResults = res.results;
    });
  }
  actiongdata() {
    this.service.fetchAction().subscribe((res) => {
      console.log(res, 'actiongenre');
      this.actiongenre = res.results;
    });
  }
  adventuredata() {
    this.service.fetchAdventure().subscribe((res) => {
      console.log(res, 'adventuregenre');
      this.adventuregenre = res.results;
    });
  }
}
