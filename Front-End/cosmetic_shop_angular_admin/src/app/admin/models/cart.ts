import { Product } from "./poduct";

export interface Cart {
    id: { "user_id": number, "product_id": number };
    quantity: number;
    sub_amount: number;
}