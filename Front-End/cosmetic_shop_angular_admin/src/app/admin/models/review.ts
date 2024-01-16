import { User } from "./User";
import { Product } from "./poduct";

export interface Review {
    id: number;
    review: string;
    rating: number;
    product_id: number;
    code: string;
    user_id: number;
    firstName: string;
    lastName: string;
    created_at: number;
}