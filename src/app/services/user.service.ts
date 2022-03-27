import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { ILoginBody, ILoginResponse, IRegistrationBody, IRegistrationResponse } from '../models/http/auth.interface';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'http://localhost:5001/api/auth';

  constructor(private http: HttpClient) {}

  login(body: ILoginBody): Observable<ILoginResponse> {
    return this.http
      .post<ILoginResponse>(`${this.url}/login`, body)
      .pipe(catchError((err) => of(err.error)));
  }

  registration(body: IRegistrationBody): Observable<IRegistrationResponse> {
    return this.http
      .post<IRegistrationResponse>(`${this.url}/registration`, body)
      .pipe(catchError((err) => of(err.error)));
  }
}
