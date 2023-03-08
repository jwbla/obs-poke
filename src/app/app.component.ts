import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.http.get('https://pokeapi.co/api/v2/pokemon/ditto').subscribe( data => console.log('data: ', data));
  }
  title = 'obs-poke';
}
