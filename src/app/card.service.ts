import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrderItem } from './entities';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  public cartItemList : OrderItem[] =[] //recupere dans le localStorage
  public productList = new BehaviorSubject<OrderItem[]>([]); //la aussi
  public search = new BehaviorSubject<string>("");
  constructor() {
    this.loadCartItemsFromLocalStorage();
   }

  getProduct(){
    return this.productList.asObservable();
  } // recevoir tt les produits Fetchall

  addtoCart(product: any, quantity = 1) {
    const cartItem: OrderItem = {
      product,
      idProduct: product.id,
      quantity,
      itemPrice: product.basePrice
    };

    this.cartItemList.push(cartItem);
    this.saveCartItemsToLocalStorage(); // Sauvegarder les éléments du panier dans le localStorage
    this.productList.next(this.cartItemList);
    console.log(this.cartItemList);
  } // ajouter au panier ici aussi pour qu'il sauvgarde les produits ajoutés

  removeCartItem(product: any) {
    const index = this.cartItemList.findIndex((item: any) => item.id === product.id);
    if (index !== -1) {
      this.cartItemList.splice(index, 1);
      this.saveCartItemsToLocalStorage();
      this.productList.next(this.cartItemList);
    }
  }

  removeAllCart() {
    this.cartItemList = [];
    this.saveCartItemsToLocalStorage(); // Sauvegarder les éléments du panier dans le localStorage
    this.productList.next(this.cartItemList);
  }
  

  private loadCartItemsFromLocalStorage() {
    const cartItemsJson = localStorage.getItem('cartItemList');
    if (cartItemsJson) {
      this.cartItemList = JSON.parse(cartItemsJson);
      this.productList.next(this.cartItemList);
    }
  }

  private saveCartItemsToLocalStorage() {
    const cartItemsJson = JSON.stringify(this.cartItemList);
    localStorage.setItem('cartItemList', cartItemsJson);
  }




}
