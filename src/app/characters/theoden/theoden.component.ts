import { Component } from '@angular/core';

@Component({
  selector: 'app-theoden',
  standalone: true,
  templateUrl: './theoden.component.html',
  styleUrl: './theoden.component.scss'
})
export class TheodenComponent {
  character = {
    name: 'Theoden',
    realm: 'Rohan',
    level: 18,
    abilities: ['Sword Mastery', 'Leadership', 'Mounted Combat']
  };
}
