import { Injectable } from '@angular/core';
import { AuthJwtService } from '../core/auth/auth-jwt.service';
import { Login } from './login.model';
import { Observable } from 'rxjs';
import { Account } from '../core/auth/account.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private authServerProvider: AuthJwtService) { }

  login(credentials: Login): Observable<any>{

    return this.authServerProvider.login(credentials);
  }
}
