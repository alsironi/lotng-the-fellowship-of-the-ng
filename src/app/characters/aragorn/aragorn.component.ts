import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aragorn',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aragorn.component.html',
  styleUrl: './aragorn.component.scss'
})
export class AragornComponent {
  character = {
    name: 'Aragorn',
    race: 'Human',
    realm: 'Gondor',
    level: 19,
    abilities: ['Swordsmanship', 'Leadership', 'Ranger Skills', 'Ancient Lineage'],
    description: 'The Ranger King who must claim his throne and unite the kingdoms of Men'
  };
}
