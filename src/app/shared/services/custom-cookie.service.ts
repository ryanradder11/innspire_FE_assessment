import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CustomCookieService {
  constructor(private cookieService: CookieService) {}

  public setFavoriteStatus(id: string, isFavorite: boolean): void {
    this.cookieService.set(id, JSON.stringify(isFavorite), { expires: 365, path: '/' });
  }

  public getFavoriteStatus(id: string): boolean {
    const cookieValue = this.cookieService.get(id);
    return cookieValue ? JSON.parse(cookieValue) : false;
  }

  public getFavoriteIds(): string[] {
    const allCookies = this.cookieService.getAll();
    return Object.keys(allCookies).filter(id => {
      try {
        return JSON.parse(allCookies[id]) === true;
      } catch (e) {
        return false;
      }
    });
  }
}
