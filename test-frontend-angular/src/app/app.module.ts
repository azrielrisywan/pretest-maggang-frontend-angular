import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';
import { TransactionComponent } from './transaction/transaction.component';

const appRoutes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'cart', component: CartComponent },
  { path: 'item', component: ItemComponent },
  { path: 'transaction', component: TransactionComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CartComponent,
    ItemComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
