import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  apiUrl = 'http://localhost:9092'

  constructor(private http: HttpClient) { }

  public getCharacter(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.apiUrl}/character`) 
  }

  public createCharacter(character: Character): Observable<any> {
    const headers = {'content-type': 'application/json'}
    const body = {}
    return this.http.post<Character>(`${this.apiUrl}/create-character`, body, {'headers': headers})
  }

  public deleteCharacter(characterId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete-character/${characterId}`)
  }
}
