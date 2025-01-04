import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from "../dummy-users";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) userName?: string;
}
