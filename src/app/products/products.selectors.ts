import { IAppState } from '../state/IAppState';

const getAllProductsSelector = (appState: IAppState) =>
  appState.products.products;

const getProductByIdSelector = (appState: IAppState) =>
  appState.products.selectedProduct;

export const productsSelectors = {
  products: getAllProductsSelector,
  product: getProductByIdSelector,
};
