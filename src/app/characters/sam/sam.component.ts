import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sam',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sam.component.html',
  styleUrl: './sam.component.scss'
})
export class SamComponent {
  character = {
    name: 'Samwise Gamgee',
    race: 'Hobbit',
    realm: 'Shire',
    level: 14,
    abilities: ['Loyalty', 'Cooking', 'Gardening', 'Determination'],
    description: 'The most loyal companion, willing to follow Frodo to the ends of the earth'
  };
}
