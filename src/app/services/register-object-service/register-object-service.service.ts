import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LostObject } from '../../interface/objects-interface'

@Injectable({
  providedIn: 'root',
})
export class RegisterObjectServiceService {
  private apiUrl = 'http://localhost:5000/objetos';

  constructor(private http: HttpClient) {}

  registerObject(objectData: LostObject): Observable<LostObject> {
    return this.http.post<LostObject>(`${this.apiUrl}`, objectData);
  }

  getObject(): Observable<LostObject[]> {
    return this.http.get<LostObject[]>(`${this.apiUrl}`);
  }
}
