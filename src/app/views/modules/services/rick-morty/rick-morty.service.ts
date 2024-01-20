import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IResponseHttp,IResponseById } from 'src/app/shared/utils/interfacess/response-http';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  // private charactersIds$ = new Subject<number[]>();
  constructor(private readonly http:HttpClient) { }


  getCharacters():Observable<IResponseHttp> {
    return this.http.get<IResponseHttp>(`${environment.api}`)
  }

  getCharacterById(id:number):Observable<IResponseById> {
    return this.http.get<IResponseById>(`${environment.api}/${id}`)

  }

  // setCharacterId(id:number[]):void {
  //   this.charactersIds$.next(id);
  // }

  // getCharacterSelected():Observable<number[]> {
  //   return this.charactersIds$.asObservable();
  // }

}
