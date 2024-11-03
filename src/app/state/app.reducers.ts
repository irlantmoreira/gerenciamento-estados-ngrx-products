import { ActionReducerMap } from '@ngrx/store';
import { productsReducer } from '../products/products.reducer';
import { IAppState } from './IAppState';

export const appReducers: ActionReducerMap<IAppState> = {
  products: productsReducer,
};
