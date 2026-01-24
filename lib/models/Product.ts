export interface Product {
  _id?: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  image: string;
  active: boolean;
  createdAt?: Date;
}
