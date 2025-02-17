// import { Injectable } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';
// import { AuthToken } from '../models/auth-token';
// import { Token } from '../interfaces/Token';
// import { Observable, catchError, map, throwError } from 'rxjs';
// import { ApiService } from './api.service';
// import { URLConfig } from 'src/configs/url-config';

// @Injectable({
//   providedIn: "root"
// })
// export class AuthTokenService {

//   private tokenKey = "easyInvoices";
//   private token: Token | null = null;
//   constructor(
//     private cookieService: CookieService,
//     private apiService:ApiService
//     ) {
//     this.tokenKey = this.tokenKey;
//     const tokenJson = this.cookieService.get(this.tokenKey);
//     if (tokenJson != "" && tokenJson != 'undefined') {
//       this.token = JSON.parse(tokenJson);
//     }
//   }
//   refreshToken(): Observable<string> {

//   const obj = {
//     token: this.getToken()?.access_token,
//   };

//   // Implement the logic to refresh the token here.
//   // You may need to send any necessary data with the refresh request (e.g., refresh token).
//   return this.apiService.postRequest(
//     `${URLConfig.refreshToken}?oldtoken=${obj.token}`,
//     {}
//   ).pipe(
//     map((response: any) => {
//       // Assuming the new token is in the 'access_token' property of the 'token' object in the response
//       // Save the new token to local storage or wherever you store the token
//       this.setToken(response.data.token)

//       return response.data.token.access_token;
//     }),
//     catchError((error: any) => {
//       // Handle token refresh failure accordingly
//       return throwError(error);
//     })
//   );
// }

//   getToken(): Token | null {
//     const tokenJson = this.cookieService.get(this.tokenKey);
//     if (tokenJson != 'undefined' && this.token == null && tokenJson != "") {
//       this.token = JSON.parse(tokenJson);
//     }
//     return this.token;
//   }
//   setToken(token: Token): void {
//     if (typeof (Storage) !== "undefined") {
//       this.cookieService.set(this.tokenKey, JSON.stringify(token), 1, '/');
//       this.token = token;
//     }
//   }
//   hasToken(): boolean {
//     return this.token ? true : false;
//   }

//   clearToken(): void {
//     this.cookieService.delete(this.tokenKey);
//   }

//   removeFromCookies(key: string) {
//     this.cookieService.delete(key);
//   }
// }
