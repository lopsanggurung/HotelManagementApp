import { RoomServiceItem } from './roomServiceItem';

export interface RoomService {
    id: number;
    bookingId: number;
    firstName?: string;
    lastName?: string;
    roomNumber?: string;
    serviceDate: Date;
    isCompleted: boolean;
    isPaid: boolean;
    totalPriceBeforeTax: number;
    taxAmount: number;
    totalPrice: number;
    roomServiceItems: RoomServiceItem[];
}
