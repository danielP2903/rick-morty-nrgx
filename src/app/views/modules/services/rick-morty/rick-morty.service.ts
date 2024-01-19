import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseHttp,IResponseById } from 'src/app/shared/interfacess/response-http';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  constructor(private readonly http:HttpClient) { }


  getCharacters():Observable<IResponseHttp> {
    return this.http.get<IResponseHttp>(`${environment.api}`)
  }

  getCharacterById(id:number):Observable<IResponseById> {
    return this.http.get<IResponseById>(`${environment.api}/${id}`)

  }
}
