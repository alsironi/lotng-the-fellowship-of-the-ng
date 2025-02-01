import { Component } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { MagicService } from '../../services/magic.service';

@Component({
  selector: 'app-gandalf',
  imports: [],
  templateUrl: './gandalf.component.html',
  styleUrl: './gandalf.component.scss'
})
export class GandalfComponent {
  constructor(private magicSpellsService: MagicService,  private characterService: CharacterService) {}

  // I'm casting a magic spell, I need magic
  castMagicSpell(spellType: string) {
    if (spellType === 'exorcism') {
      /* this.magicSpellsService.castExorcism(); */
    } else if (spellType === 'Fireworks') {
/*       this.magicSpellsService.castFireworks();
 */    }
  }
}
