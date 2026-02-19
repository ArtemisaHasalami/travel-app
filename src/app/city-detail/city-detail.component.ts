import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-detail',
  standalone: false,
  templateUrl: './city-detail.component.html',
  styleUrl: './city-detail.component.css'
})
export class CityDetailComponent {
  cityName: string | null = '';
  cityData: any;

  cities: any = {
    istanbul: {
      name: 'Istanbul',
      image: 'assets/istanbul.jpg',
      about: 'Istanbul is where Europe meets Asia.',
      attractions: ['Hagia Sophia', 'Blue Mosque', 'Grand Bazaar']
    },
    rome: {
      name: 'Rome',
      image: 'assets/rome.jpg',
      about: 'Rome is the Eternal City.',
      attractions: ['Colosseum', 'Vatican', 'Trevi Fountain']
    },
    paris: {
      name: 'Paris',
      image: 'assets/paris2.jpg',
      about: 'Paris is the city of love.',
      attractions: ['Eiffel Tower', 'Louvre Museum', 'Notre Dame']
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.cityName = this.route.snapshot.paramMap.get('name');
    this.cityData = this.cities[this.cityName!];
  }
showAbout: boolean = false;

toggleAbout() {
  this.showAbout = !this.showAbout;
}
}
