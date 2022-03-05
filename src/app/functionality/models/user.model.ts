export interface User {
    username: string;
    email?: string;
    password: string;
    confirmPassword?: string;
    picture? : string;
    token?: string;
    id?: number;
}