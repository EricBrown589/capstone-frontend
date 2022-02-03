import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  i = 1

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
    if (this.character.length < 2) {
      this.characterService.deleteCharacter(this.i).subscribe(() => {
        console.log(this.i)
        this.character.pop ()
        this.i++
        console.log(this.i) 
      })
    }
  }

  public createCharacter(): void {
    this.characterService.createCharacter().subscribe(() => {
      this.getCharacter()
    })
  }

  public reroll() {
    this.removeCharacter()
    this.createCharacter()
  }

}
