// src/types/data.d.ts
export interface User {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    isRemembered: boolean;
    isLoggedIn: boolean;
    timeJoined: string;
    image: string;
    preferences: {};
    favorites: number[],
}

export interface Data {
    users: User[];
}