export interface Product {
  label: string;
  basePrice: number;
  description: string;
  picture: string;
  idShop:number;
  id?: number;
}
export interface Shop {
  name: string;
  address: string;
  id?: number;
}
export interface Orders {
  createdAt: Date;
  customerName: string;
  id?: number;
}
export interface OrderItem {
  product?:Product
  quantity: number;
  itemPrice: number;
  idOrders?: number;
  idProduct: number;
  id?: number;
}
export interface Options {
  label: string;
  price: number;
  idProduct: number;
  id?: number;
}
