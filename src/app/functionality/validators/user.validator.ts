import { AbstractControl } from "@angular/forms";

function validateSignUp(credentials: any) {
    _validateUsername(credentials.username);
    _validateEmail(credentials.email);
    _validatePasswords(credentials.password, credentials.confirmPassword);
}

function _validateUsername(username: AbstractControl): {[key: string]: any} | null {
    // Check DB for existing username
    const validUsername = true;
    return validUsername ? {'Username': 'is not available'} : null;
}
function _validateEmail(email: AbstractControl): {[key: string]: any} | null {
    // Check DB for existing email
    const validEmail = true;
    return validEmail ? {'Email': 'is in use'} : null;
}
function _validatePasswords(password1: AbstractControl, password2: AbstractControl): {[key: string]: any} | null{
    let passwordsSame: boolean = password1 === password2;
    return passwordsSame ? null : {'Passwords': 'do not match'};
}

function validateSignIn(username: AbstractControl, password: AbstractControl): {[key: string]: any} | null{
    // Check DB for corresponding username and password
    const validLogin = true;
    return validLogin ? {'Credentials': 'invalid'} : null;
}