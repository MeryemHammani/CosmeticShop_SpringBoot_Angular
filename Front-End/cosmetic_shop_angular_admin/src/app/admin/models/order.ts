import { OrderItem } from "./orderItems";

export interface Order {
    id: number,
    amount: number,
    phone: string,
    address: string,
    status: string,
    order_date: Date,
    payment_type: string,
    user: { "id": number },
    orderItems: OrderItem[]
}