export interface LaundryService {
    id: number;
    bookingId: number;
    firstName?: string;
    lastName?: string;
    roomNumber?: string;
    dateOrdered: Date;
    dateReturnedFromLaundry: Date;
    dateReturnedToGuest: Date;
    isPaid: boolean;
    totalPriceBeforeTax: number;
    taxAmount: number;
    totalPrice: number;
}
