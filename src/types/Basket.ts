export interface Basket {
  id: string;
  buyerId: string;
  items: BasketItem[];
}
export interface BasketItem {
  name: string;
  productId: string;
  price: number;
  quantity: number;
}
