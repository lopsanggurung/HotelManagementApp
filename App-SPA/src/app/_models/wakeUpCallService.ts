export interface WakeUpCallService {
    id: number;
    bookingId: number;
    firstName?: string;
    lastName?: string;
    roomNumber?: string;
    wakeUpCallDate: Date;
    isCompleted: boolean;
}
