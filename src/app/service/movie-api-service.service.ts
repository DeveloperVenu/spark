import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
  
export class MovieApiServiceService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://api.themoviedb.org/3';
  apikey = '4aaf313769d7f0ea1d1f27597f1d4702';
  // 9732d33627b73ce0496c276048071149

  //bannerApidata
  bannerApiData(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/popular?api_key=${this.apikey}`
    );
  }
  //latestmovies
  latestMoviesApiData(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/now_playing?api_key=${this.apikey}`
    );
  }
  //search movie https://api.themoviedb.org/3/search/movie?api_key=9732d33627b73ce0496c276048071149&language=en-US&page=1&include_adult=false
  searchMovie(data: any): Observable<any> {
    console.log(data, 'movie');
    return this.http.get(
      `${this.baseUrl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`
    );
  }

  movieDetails(data: any): Observable<any> {
    console.log(data, 'moviedetail');
    return this.http.get(
      `${this.baseUrl}/movie/${data}?api_key=${this.apikey}`
    );
  }
  movieVideo(data: any): Observable<any> {
    console.log(data, 'moviedetail');
    return this.http.get(
      `${this.baseUrl}/movie/${data}/videos?api_key=${this.apikey}`
    );
  }

  movieaCast(data: any): Observable<any> {
    console.log(data, 'moviedetail');
    return this.http.get(
      `${this.baseUrl}/movie/${data}/credits?api_key=${this.apikey}`
    );
  }
  //latestmovies
  upcomingMoviesApiData(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/upcoming?api_key=${this.apikey}`
    );
  }
  fetchAction(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=28`
    );
  }
  fetchAdventure(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=12`
    );
  }
}
