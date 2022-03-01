import { Component, Input } from '@angular/core';
import { Errors } from '../functionality';

@Component({
  selector: 'app-error-format',
  templateUrl: './error-format.component.html',
  styleUrls: ['./error-format.component.css']
})

// This component formats the app's errors into an array of strings
// to be cleanly displayed on screen for the user
export class ErrorFormatComponent {
  errorsArray: Array<string> = [];

    get ErrorsArray() { return this.errorsArray; }
    
  // Appending each error onto array as string of key and data
    @Input()
    set Errors(errors: Errors) {
      this.errorsArray = [];
      for (let key in errors.errorsDict) {
        this.errorsArray.push(key + " " + errors.errorsDict[key]);
       }
    }

}
