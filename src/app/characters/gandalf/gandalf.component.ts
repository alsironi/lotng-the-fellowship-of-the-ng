import { Component } from '@angular/core';

@Component({
  selector: 'app-gandalf',
  standalone: true,
  templateUrl: './gandalf.component.html',
  styleUrl: './gandalf.component.scss'
})
export class GandalfComponent {
  character = {
    name: 'Gandalf',
    realm: 'Arda',
    level: 20,
    abilities: ['Fireworks', 'Staff Combat', 'Magic']
  };
}
