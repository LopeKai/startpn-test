export interface AddUser {
    name: string;
    email: string;
    password: string;
}

export interface SignInPayload {
    email: string;
    password: string;
}

export interface AddOccurrence {
    name: string;
    origin: string;
    status: string;
}