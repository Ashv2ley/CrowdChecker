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

export interface Location {
    id: number;
    name: string;
    type: number;
    distance: number;
    hours: {
        open: string;
        close: string;
    };
    currentDensity: string;
    reports: {
        density: string;
        timeReported: string;
    }[];
    comments: {
        text: string;
        timeSubmitted: string;
    }[]
}

export interface Data {
    users: User[];
}