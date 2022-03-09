import { AbstractControl } from "@angular/forms";
import { Errors } from "../models";

export function validateSignUp(credentials: any): Errors | null {
    let err: Errors = {errorsDict: {}};

    let validations = [_validateUsername(credentials.username), _validateEmail(credentials.email),
    _validatePasswords(credentials.password, credentials.confirmPassword)];

    for (let v = 0; v < validations.length; v++){
        if (validations[v] != null){
            // @ts-ignore
            err = err + $validators[v];

        }
    }

    console.log(err);

    return null;
}

function _validateUsername(username: AbstractControl): {[key: string]: any} | null {
    // Check DB for existing username
    const validUsername = true;
    return validUsername ? null : {'Username': 'is not available'};
}
function _validateEmail(email: AbstractControl): {[key: string]: any} | null {
    // Check DB for existing email
    const validEmail = true;
    return validEmail ? null : {'Email': 'is in use'};
}
function _validatePasswords(password1: AbstractControl, password2: AbstractControl): {[key: string]: any} | null{
    let passwordsSame: boolean = password1 === password2;
    return passwordsSame ? null : {'Passwords': 'do not match'};
}

export function validateSignIn(credentials: any): {[key: string]: any} | null{
    // Check DB for corresponding username and password
    const validLogin = true;
    return validLogin ? null : {Credentials: 'invalid'};
}