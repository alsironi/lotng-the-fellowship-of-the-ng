import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-frodo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './frodo.component.html',
  styleUrl: './frodo.component.scss'
})
export class FrodoComponent {
  character = {
    name: 'Frodo Baggins',
    race: 'Hobbit',
    realm: 'Shire',
    level: 15,
    abilities: ['Stealth', 'Courage', 'Ring Resistance'],
    description: 'The Ring-bearer destined to destroy the One Ring'
  };
}
