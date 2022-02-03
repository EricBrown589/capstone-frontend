import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Character } from './character';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  apiUrl = environment.url

  constructor(private http: HttpClient) { }

  public getCharacter(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.apiUrl}` + `/character`) 
  }

  public createCharacter(): Observable<any> {
    const headers = {'content-type': 'application/json'}
    const body = {}
    return this.http.post<Character>(`${this.apiUrl}` + `/create-character`, body, {'headers': headers})
  }

  public deleteCharacter(characterId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}` + `delete-character/${characterId}`)
  }
}
