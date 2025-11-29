import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_KEY = 'isAuthenticated';

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'Admin' && password === '12345') {
      localStorage.setItem(this.AUTH_KEY, 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.AUTH_KEY);
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.AUTH_KEY) === 'true';
  }
}