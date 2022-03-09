import { AbstractControl } from "@angular/forms";
import { Errors } from "../models";

export function validateSignUp(credentials: any): Errors | null {

    let validations: Array< {[key: string]: any} | null > = 
    [_validateUsername(credentials.username), 
    _validateEmail(credentials.email),
    _validatePasswords(credentials.password, credentials.confirmPassword)];

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

function _validateUsername(username: AbstractControl): {[key: string]: any} | null {
    // Check DB for existing username
    const validUsername = true;
    return validUsername ? null : {Username: 'is not available'};
}
function _validateEmail(email: AbstractControl): {[key: string]: any} | null {
    // Check DB for existing email
    const validEmail = true;
    return validEmail ? null : {Email: 'is in use'};
}
function _validatePasswords(password1: AbstractControl, password2: AbstractControl): {[key: string]: any} | null{
    let passwordsSame: boolean = password1 === password2;
    return passwordsSame ? null : {Passwords: 'do not match'};
}

export function validateSignIn(credentials: any): Errors | null {
    // Check DB for corresponding username and password
    const validLogin = true;
    return validLogin ? null : {errorsDict: {Credentials: 'invalid'}};
}