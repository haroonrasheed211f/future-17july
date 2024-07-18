import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      defaultFOCWorker: [''],
      defaultCEUWorker: [''],
      pickupCode: [''],
      chargeCode: [''],
      warrantTypeEntryCode: [''],
      leinSupportIND: [''],
      scbwAutoSCH: [''],
      scbwAutoSCHType: [''],
      scbwAutoSCHOut: [''],
      scbwAutoSCHMinWeeks: [''],
      defaultParentingTimeBondAMT: [''],
      splitEventDefaultSpacing: [''],
      defaultAppearanceBondAMT: [''],
      defaultAppearanceBondPercent: [''],
      courtOriginatingAgency: [''],
      defaultLaboratoryID: [''],
      benchWarrantRemarks: [''],
      imageDocumentsFTPId: [''],
      imageDocumentsFTPServer: [''],
      password: [''],
      path: [''],
      iwnText: [''],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
