import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { productsActions } from '../../products/products.actions';
import { productsSelectors } from '../../products/products.selectors';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, FormsModule],
  template: `
    <h1>Lista de produtos</h1>
    <label>
      <input
        [(ngModel)]="id"
        placeholder="buscar por id"
        (ngModelChange)="onSearchChange()"
      />
    </label>
    @if(!id){ @for(product of (products$|async); track product.id){
    <h2>{{ product.name }}</h2>
    <p>{{ product.price }}</p>
    } }@else{
    <h1>Produto específico</h1>
    <h2>{{ (product$ | async)?.name }}</h2>
    <p>{{ (product$ | async)?.price }}</p>
    }
  `,
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  id?: number;
  private store = inject(Store);
  products$ = this.store.select(productsSelectors.products);
  product$ = this.store.select(productsSelectors.product);
  ngOnInit(): void {
    this.store.dispatch(productsActions.getAllProducts());
  }

  onSearchChange(): void {
    if (this.id) {
      this.store.dispatch(productsActions.getProductById({ id: this.id }));
    }
  }
}
