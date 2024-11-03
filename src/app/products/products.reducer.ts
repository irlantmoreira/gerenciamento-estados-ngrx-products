import { createReducer, on } from '@ngrx/store';
import { Product } from '../interface/product/product';
import { productsActions } from './products.actions';

export interface ProductsState {
  products: Product[];
  selectedProduct?: Product | null;
}

export const initialState: ProductsState = {
  products: [],
  selectedProduct: null,
};

const _productsReducer = createReducer(
  initialState,
  on(productsActions.getAllProducts, (state) => {
    console.log('GET PRODUCT: ', state);
    return { ...state };
  }),
  on(productsActions.getAllProductsSuccess, (state, { products }) => {
    return { ...state, products };
  }),
  on(productsActions.getProductById, (state, { id }) => {
    return { ...state, selectedProduct: null };
  }),
  on(productsActions.getProductByIdSuccess, (state, { product }) => {
    return { ...state, selectedProduct: product };
  })
);

export const productsReducer = (state: any, action: any) => {
  return _productsReducer(state, action);
};
