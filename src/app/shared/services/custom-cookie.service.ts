import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CustomCookieService {
  constructor(private cookieService: CookieService) {}

  setFavoriteStatus(id: string, isFavorite: boolean): void {
    this.cookieService.set(id, JSON.stringify(isFavorite), { expires: 365, path: '/' });
  }

  getFavoriteStatus(id: string): boolean {
    const cookieValue = this.cookieService.get(id);
    return cookieValue ? JSON.parse(cookieValue) : false;
  }
}
