import { LaundryServiceItem } from './laundryServiceItem';

export interface LaundryService {
    id: number;
    bookingId: number;
    dateOrdered: Date;
    dateReturnedFromLaundry: Date;
    dateReturnedToGuest: Date;
    isPaid: boolean;
    totalPriceBeforeTax: number;
    taxAmount: number;
    totalPrice: number;
    laundryServiceItems: LaundryServiceItem[];
}
