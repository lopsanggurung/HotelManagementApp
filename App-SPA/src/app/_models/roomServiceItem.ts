import { MenuItem } from './menuItem';

export interface RoomServiceItem {
    id?: number;
    roomServiceId?: number;
    menuItemId: number;
    quantity: number;
    pricePerItem: number;
    menuItem: MenuItem;
}
