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
    this.getCharacter();
  }

  public character!: Character[];
  public manipulateCharacter!: Character;

  public getCharacter(): void {
    this.characterService.getCharacter().subscribe((response: Character[]) => {
      console.log(response)
      this.character = response;
    })
  }

  public removeCharacter(): void {
    let i: number = 0
    if (this.character.length < 100) {
      this.characterService.deleteCharacter(this.character.length + i).subscribe(() => {
        console.log(i)
        this.character.pop ()
        i++
        console.log(i) 
      })
    }
  }

  public createCharacter(character: Character): void {
    this.characterService.createCharacter(character).subscribe(() => {
      this.getCharacter()
    })
  }

  public reroll() {
    this.removeCharacter()
    this.createCharacter(this.manipulateCharacter)
  }

}
