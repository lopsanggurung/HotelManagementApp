import { RoomService } from 'src/app/_models/roomService';

export interface Booking {
    id: number;
    guestId: number;
    firstName?: string;
    lastName?: string;
    country?: string;
    roomId: number;
    roomNumber?: string;
    createdDate: Date;
    lastModifiedDate: Date;
    bookingStatus: string;
    checkInDate: Date;
    checkOutDate: Date;
    numberOfAdults: number;
    numberOfChildren: number;
    additionalBed: boolean;
    requirePickUp: boolean;
    pickUpDate: Date;
    pickUpLocation: string;
    pickUpDetails: string;
    checkedInDate: Date;
    checkedOutDate: Date;
    notes: string;
    feedBackOnCheckOut: string;
    bookingSource: string;
    paymentStatus: string;
    pricePerNight: number;
    additionalBedPricePerNight: number;
    totalPriceBeforeTax: number;
    taxAmount: number;
    depositAmount: number;
    totalPrice: number;
    roomServices: RoomService[];
}
