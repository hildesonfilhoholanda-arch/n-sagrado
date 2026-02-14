
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  city: string;
  state: string;
}
