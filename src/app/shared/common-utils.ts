import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonUtils {
  public camelCaseToCapitalizedWords(inputString: string): string {
    const camelCaseRegex = /[a-z]+|[A-Z][a-z]*/g;
    const words = inputString.match(camelCaseRegex) || [];
    const capitalizedString = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return capitalizedString;
  }

  public stringSplice(string: string, maxLength: number): string {
    if (string)
      return string.length > maxLength
        ? string.slice(0, maxLength) + '...'
        : string;
    else return '---';
  }

  public convertLabelToPath(inputString: string): string {
    const pathString = inputString.replace(/\s+/g, '-').toLowerCase();
    console.log(pathString);

    return pathString;
  }

  public formatDateToPatchWithDateInput(date: string): string {
    return new Date(date).toISOString().split('T')[0];
  }

  // public formatDate(date: string): string {
  //   return this.datePipe.transform(new Date(date),'mediumDate')?.toString() ?? ''
  // }

  public toString(data: number): string {
    return data.toString();
  }

  // public deepCopy(obj: any): any {
  //   // Use JSON.stringify to serialize the object, then JSON.parse to create a deep copy
  //   return JSON.parse(JSON.stringify(obj));
  // }
  public deepCopy<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map((item) => this.deepCopy(item)) as T;
    }

    const newObj: Record<string, any> = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = this.deepCopy(obj[key]);
      }
    }

    return newObj as T;
  }

  public dashPlaceholder(
    inputString: string | undefined,
    showDashesAsPlaceholder: boolean = true,
  ): string {
    if ((!inputString || inputString == undefined) && showDashesAsPlaceholder)
      return '---';
    return inputString as string;
  }

  public getObjectKeys(obj: object): string[] {
    return obj ? Object.keys(obj) : [];
  }

  public formatDateTimeInAgo(timestamp: Date | string): string {
    const now = new Date();
    const past = new Date(timestamp);
    const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

    if (diffInSeconds < 60) {
      return 'Just now';
    }
    if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} min ago`;
    }
    if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }
    if (diffInSeconds < 604800) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }

    return past.toLocaleDateString(); // Fallback to date if older than a week
  }
}

export function getQueryParam(
  route: ActivatedRoute,
  param: string,
): Observable<string | null> {
  return new Observable<string | null>((observer) => {
    route.queryParams.subscribe((params) => {
      const value = params[param] || null;
      observer.next(value);
      observer.complete();
    });
  });
}

export function redirectTo(
  router: Router,
  path: string,
  params?: Record<string, unknown>,
  queryParams?: Record<string, unknown>,
) {
  if (!params && !queryParams) {
    router.navigate([path]);
    return;
  }
  const pathSegments = [path, ...Object.values(params || {})];
  router.navigate([path, pathSegments], { queryParams: queryParams });
}
