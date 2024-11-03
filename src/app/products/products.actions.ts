import { createAction, props } from '@ngrx/store';
import { Product } from '../interface/product/product';

const getAllProducts = createAction('[Product] load products');
const getAllProductsSuccess = createAction(
  '[Product] load products success',
  props<{ products: Product[] }>()
);
const getProductById = createAction(
  '[Product] load product',
  props<{ id: number }>()
);

const getProductByIdSuccess = createAction(
  '[Product] load product success',
  props<{ product: Product }>()
);

export const productsActions = {
  getAllProducts,
  getAllProductsSuccess,
  getProductById,
  getProductByIdSuccess,
};
