export interface User {
    username: string;
    email: string;
    password: string;
    picture? : string;
    token?: string;
    id: number;
}