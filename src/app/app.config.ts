import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import {
  getAllProductsEffect,
  getProductByIdEffect,
} from './products/products.effects';
import { appReducers } from './state/app.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(appReducers),
    provideEffects({
      getAllProductsEffect,
      getProductByIdEffect,
    }),
    provideHttpClient(),
  ],
};
