import { Component } from '@angular/core';

@Component({
  selector: 'app-cities',
  standalone: false,
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent {
  cities = [
    {
      name: 'Istanbul',
      image: 'assets/istanbul1.jpg',
      description: 'Where Europe meets Asia.'
    },
    {
      name: 'Rome',
      image: 'assets/Rome1.jpg',
      description: 'The Eternal City full of history.'
    },
    {
      name: 'Paris',
      image: 'assets/paris3.jpg',
      description: 'The city of love and lights.'
    }
  ];
}
