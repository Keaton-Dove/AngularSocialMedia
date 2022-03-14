import { Injectable } from "@angular/core";
import { Observable, map, concatMap, filter } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AbstractControl } from "@angular/forms";

import { Errors, User } from "../models";

@Injectable()
export class UserValidator {

    //@ts-ignore
    users: Observable<User[]>;

    constructor (
        private httpClient: HttpClient
    ){ this.users = this.loadUsers(); }

    loadUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>('api/users');
    }

    validateSignUp(credentials: any): Errors | null {

        let validations: Array< {[key: string]: any} | null > = [
            this._validateUsername(credentials.username), 
            this._validateEmail(credentials.email),
            this._validatePasswords(credentials.password, credentials.confirmPassword)
        ];

        let ed: {[key: string]: string} = {}
        
        for (let v = 0; v < validations.length; v++){
            for(let key in validations[v]){
                // @ts-ignore
                ed[key] = validations[v][key];
            }
        }
        if (Object.keys(ed).length > 0){
            let err: Errors = {errorsDict: ed};
            return err;
        }

        return null;
    }

    _validateUsername(username: AbstractControl): {[key: string]: any} | null {
        // Check DB for existing username
        const validUsername = true;
        return validUsername ? null : {Username: 'is not available'};
    }
    _validateEmail(email: AbstractControl): {[key: string]: any} | null {
        // Check DB for existing email
        const validEmail = true;
        return validEmail ? null : {Email: 'is in use'};
    }
    _validatePasswords(password1: AbstractControl, password2: AbstractControl): {[key: string]: any} | null{
        let passwordsSame: boolean = password1 === password2;
        return passwordsSame ? null : {Passwords: 'do not match'};
    }

    validateSignIn(credentials: any): Errors | null {
        let validLogin: boolean = true;
        return validLogin ? null : {errorsDict: {Credentials: 'invalid'}};
    }
}