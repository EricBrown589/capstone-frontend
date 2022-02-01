import { Component } from '@angular/core';
import { Character } from './character';
import { CharacterService } from './character.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public character!: Character[];
  public makeCharacter!: Character;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.createCharacter(this.makeCharacter);
    this.getCharacter();
  }

  public getCharacter(): void {
    this.characterService.getCharacter().subscribe((response: Character[]) => {
      this.character = response;
    })
  }

  public createCharacter(character: Character): void {
    this.characterService.createCharacter(character).subscribe((character) => {
      this.getCharacter()
    })
  }
}
