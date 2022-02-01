import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.createCharacter(this.makeCharacter);
    this.getCharacter();
  }

  public character!: Character[];
  public makeCharacter!: Character;

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
