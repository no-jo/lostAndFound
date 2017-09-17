export enum IsActive {
    ACTIVE,
    INACTIVE
}

export class User {
    id: number;
    login: String;
    email: String;
    firstName: String;
    lastName: String;
    IsActive: IsActive;
}
