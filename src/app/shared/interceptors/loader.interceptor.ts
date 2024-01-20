import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize, timer } from 'rxjs';
import { ReduxService } from '../redux/service/redux.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private activeRequest = 0;
  constructor(private reduxService:ReduxService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.activeRequest === 0) {
      this.reduxService.setStatusLoader(true);
		}
    this.activeRequest++;

    return next.handle(request).pipe(
      finalize(() => timer(500).subscribe(() => this.stopLoader())
    ));
  }
  private stopLoader() {
		this.activeRequest--;
		if (this.activeRequest === 0) {
			this.reduxService.setStatusLoader(false);
		}
	}
}
