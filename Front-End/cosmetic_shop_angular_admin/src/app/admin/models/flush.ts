import { FlushItem } from "./flushItem";
import { Product } from "./poduct";

export interface Flush {
    id: number;
    description: string;
    start_date: Date;
    end_date: number;
    created_at: Date;
    flushItems: FlushItem[];
    products: Product[];
    remainingTime: string;
}