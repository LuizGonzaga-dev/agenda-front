import { Event } from "./Event";

export type User = {
    UserId : number,
    Name: string,
    Password: string,
    Email: string,
    Phone: string,
    IsAdm: boolean,
    Events: Event[]
}