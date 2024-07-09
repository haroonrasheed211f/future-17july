import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  name = 'Interpolation';
  description = 'interpolation binding using double curly brackets {{}}';

  isbtn = false;
  // property binding
  onChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    console.log(value);
  }

  inputvalue = 'two way binding';
}
