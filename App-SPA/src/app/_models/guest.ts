import { Booking } from './booking';

export interface Guest {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    // nationality: string;
    // streetAddress: string;
    // city: string;
    // state: string;
    // zipCode: string;
    country: string;
    booking?: Booking[];
}
