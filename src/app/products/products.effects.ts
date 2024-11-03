import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { ProductService } from '../services/product/product.service';
import { productsActions } from './products.actions';

export const getAllProductsEffect = createEffect(
  (actions$ = inject(Actions), productsService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productsActions.getAllProducts),
      tap(() => console.log('passou pelo effect')),
      switchMap(() =>
        productsService
          .getProducts()
          .pipe(
            map((products) =>
              productsActions.getAllProductsSuccess({ products })
            )
          )
      )
    );
  },
  { functional: true }
);

export const getProductByIdEffect = createEffect(
  (actions$ = inject(Actions), productsService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productsActions.getProductById),
      switchMap(({ id }) =>
        productsService
          .getProduct(id)
          .pipe(
            map((product) => productsActions.getProductByIdSuccess({ product }))
          )
      )
    );
  },
  { functional: true }
);
