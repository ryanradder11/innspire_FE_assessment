import { TestBed } from '@angular/core/testing';
import { CustomCookieService } from './custom-cookie.service';
import { CookieService } from 'ngx-cookie-service';

describe('CustomCookieService', () => {
  let service: CustomCookieService;
  let cookieServiceSpy: jasmine.SpyObj<CookieService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CookieService', ['getAll', 'get', 'set', 'delete']);

    TestBed.configureTestingModule({
      providers: [
        CustomCookieService,
        { provide: CookieService, useValue: spy }
      ]
    });

    service = TestBed.inject(CustomCookieService);
    cookieServiceSpy = TestBed.inject(CookieService) as jasmine.SpyObj<CookieService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return favorite IDs where value is true', () => {
    const mockCookies = {
      '__zlcmid': '1IbmEjFL1d0pTR5',
      'tt2271413': 'false',
      'tt2271415': 'true',
      'tt4575576': 'true',
      'tt21344514': 'true',
      'tt32204353': 'true',
      'tt33562131': 'false',
      'tt33764258': 'false'
    };

    cookieServiceSpy.getAll.and.returnValue(mockCookies);

    const favoriteIds = service.getFavoriteIds();
    expect(favoriteIds).toEqual(['tt2271415', 'tt4575576', 'tt21344514', 'tt32204353']);
  });

  it('should handle invalid JSON in cookies gracefully', () => {
    const mockCookies = {
      'tt2271413': 'false',
      'tt2271415': 'true',
      'invalidJson': 'not a json'
    };

    cookieServiceSpy.getAll.and.returnValue(mockCookies);

    const favoriteIds = service.getFavoriteIds();
    expect(favoriteIds).toEqual(['tt2271415']);
  });

  it('should set favorite status correctly', () => {
    service.setFavoriteStatus('tt1234567', true);
    expect(cookieServiceSpy.set).toHaveBeenCalledWith('tt1234567', 'true', { expires: 365, path: '/' });

    service.setFavoriteStatus('tt1234567', false);
    expect(cookieServiceSpy.set).toHaveBeenCalledWith('tt1234567', 'false', { expires: 365, path: '/' });
  });

  it('should get favorite status correctly', () => {
    cookieServiceSpy.get.and.returnValue('true');
    expect(service.getFavoriteStatus('tt1234567')).toBeTrue();

    cookieServiceSpy.get.and.returnValue('false');
    expect(service.getFavoriteStatus('tt1234567')).toBeFalse();

    cookieServiceSpy.get.and.returnValue('');
    expect(service.getFavoriteStatus('tt1234567')).toBeFalse();
  });
});
