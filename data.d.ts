// src/types/data.d.ts
export interface User {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    isVerified: boolean;
    isRemembered: boolean;
    isLoggedIn: boolean;
    timeJoined: string;
    image: string;
    preferences: Record<string, unknown>;
}

export interface Data {
    users: User[];
}