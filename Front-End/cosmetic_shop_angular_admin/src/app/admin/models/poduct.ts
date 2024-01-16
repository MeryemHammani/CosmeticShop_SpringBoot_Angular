import { Image } from "./images";
import { Brand } from "./brand";

export interface Product {
    id: number;
    code: string;
    rating: number;
    name: string;
    price: number,
    quantity: number,
    description: string,
    ingredients: string;
    created_at: Date,
    discount: number,
    flush_discount: number,
    how_to_use: string,
    size: string,
    pack: boolean,
    status: string,
    brand: Brand,
    images: Image[],
    image: string
}
