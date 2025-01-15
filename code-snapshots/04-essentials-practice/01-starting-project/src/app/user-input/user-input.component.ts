import {Component, Output, EventEmitter} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {type UserInputModel} from "./user-input.model";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() userInput = new EventEmitter<UserInputModel>();

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit() {
    this.userInput.emit(
      {
        initialInvestment: parseInt(this.enteredInitialInvestment),
        annualInvestment: parseInt(this.enteredAnnualInvestment),
        expectedReturn: parseInt(this.enteredExpectedReturn),
        duration: parseInt(this.enteredDuration),
      }
    );
  }
}
