export interface User {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    created: Date;
    lastActive: Date;
    roles?: string[];
}
