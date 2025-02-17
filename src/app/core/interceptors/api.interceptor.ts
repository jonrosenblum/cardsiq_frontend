// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
//   HttpResponse,
//   HttpErrorResponse
// } from '@angular/common/http';
// import { BehaviorSubject, Observable, catchError, filter, switchMap, take, tap, throwError} from 'rxjs';
// import { AuthTokenService } from '../services/auth-token.service';
// import { Token } from '../interfaces/Token';

// @Injectable()
// export class ApiInterceptor implements HttpInterceptor {

//   private isRefreshing = false;
//   private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
//   constructor(private authService:AuthTokenService) {}

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

//     var token:Token | null = this.authService.getToken();
//     if(token?.access_token){
//       console.log("IN Interception token");
//       console.log(token?.access_token);
//       request = this.addTokenToRequest(request, token?.access_token);
//     }

//     return next.handle(request).pipe(
//       tap((event: HttpEvent<any>) => {
//         if (event instanceof HttpResponse) {
//           // this.hideLoader();
//         }
//       }),
//       catchError((error: any) => {
//         if (error instanceof HttpErrorResponse && error.status === 401) {
//           if (!this.isRefreshing) {
//             this.isRefreshing = true;
//             this.refreshTokenSubject.next(null);

//             // Call your refresh token API here and update the token
//             return this.authService.refreshToken().pipe(
//               switchMap((newToken: string) => {
//                 //console.log(newToken,'token')
//                 this.isRefreshing = false;
//                 this.refreshTokenSubject.next(newToken);

//                 // Retry the original request with the new token
//                 request = this.addTokenToRequest(request, newToken);
//                 return next.handle(request);
//               }),
//               catchError((refreshError: any) => {
//                 this.isRefreshing = false;
//                 // this.sharedService.logout(); // Or handle token refresh failure accordingly
//                 return throwError(refreshError);
//               })
//             );
//           } else {
//             // Wait for the token to be refreshed before retrying
//             return this.refreshTokenSubject.pipe(
//               filter((token) => token !== null),
//               take(1),
//               switchMap(() => {
//                 // Retry the original request with the new token
//                 request = this.addTokenToRequest(request, this.authService.getToken());
//                 return next.handle(request);
//               })
//             );
//           }
//         } else {
//           return throwError(error);
//         }
//       })
//     );

//   }

//   private addTokenToRequest(request: HttpRequest<any>, token: any) {
//     return request.clone({
//       setHeaders: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   }
// }
