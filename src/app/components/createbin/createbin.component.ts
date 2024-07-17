import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-createbin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './createbin.component.html',
  styleUrl: './createbin.component.css',
})
export class CreatebinComponent {
  title = new FormControl('', [Validators.required]);
  code = new FormControl('', [Validators.required]);
  binForm = new FormGroup({ title: this.title, code: this.code });
  save() {
    console.log(this.binForm.value);
  }
}
