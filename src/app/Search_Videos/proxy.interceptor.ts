import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';

@Injectable()
export class ProxyInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // Modificar la URL de la solicitud para redirigirla a través del proxy
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const newRequest = request.clone({
      url: proxyUrl + request.url,
    });

    return next.handle(newRequest);
  }
}
