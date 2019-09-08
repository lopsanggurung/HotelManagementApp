export interface RoomService {
    id: number;
    bookingId: number;
    serviceDate: Date;
    isCompleted: boolean;
    isPaid: boolean;
    totalPriceBeforeTax: number;
    taxAmount: number;
    totalPrice: number;
}
