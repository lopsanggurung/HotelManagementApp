import { RestaurantOrderItem } from './restaurantOrderItem';

export interface RestaurantOrder {
    id: number;
    bookingId: number;
    orderFor: string;
    orderDate: Date;
    isCompleted: boolean;
    isPaid: boolean;
    totalPriceBeforeTax: number;
    taxAmount: number;
    totalPrice: number;
    restaurantOrderItems: RestaurantOrderItem[];
}
