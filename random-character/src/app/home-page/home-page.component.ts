import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../character';
import { CharacterService } from '../character.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public makeCharacter!: Character;
  

  constructor(private characterService: CharacterService, private router: Router, public route: Router) { }

  ngOnInit(): void {
  }

  public createCharacter(character: Character): void {
    this.characterService.createCharacter(character).subscribe((character) => {
      this.characterService.getCharacter()
    })
  }

  public onClick() {
    this.createCharacter(this.makeCharacter)
    this.router.navigateByUrl('/character')
  }
}
