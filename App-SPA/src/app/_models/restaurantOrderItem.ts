export interface RestaurantOrderItem {
    id?: number;
    restaurantOrderId?: number;
    menuItemId: number;
    quantity: number;
    pricePerItem: number;
}
