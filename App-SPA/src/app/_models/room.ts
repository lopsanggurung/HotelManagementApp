export interface Room {
    id: number;
    isArchived: boolean;
    roomNumber: string;
    roomName: string;
    roomType: string;
    twinBed: number;
    fullBed: number;
    queenBed: number;
    kingBed: number;
    maxOccupancy: number;
    price: number;
    isClean: boolean;
}
