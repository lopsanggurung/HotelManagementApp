import { MenuItem } from './menuItem';

export interface RestaurantOrderItem {
    id?: number;
    restaurantOrderId?: number;
    menuItemId: number;
    quantity: number;
    pricePerItem: number;
    menuItem: MenuItem;
}
