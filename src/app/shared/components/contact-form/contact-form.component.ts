import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { markAsDirty } from '../../validators/validators';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  contactForm: FormGroup;
  fb: FormBuilder = new FormBuilder();
  @Output('afterSubmitted') afterSubmitted = new EventEmitter<{
    [key: string]: any;
  }>();

  constructor() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
        ],
      ],
      phone: ['', [Validators.required, Validators.pattern('^0\\d{9}$')]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.afterSubmitted.emit(this.contactForm.value);
    } else {
      markAsDirty(this.contactForm);
    }
  }

  setValues(content: { [key: string]: any }) {
    Object.keys(this.contactForm.controls).forEach((key) => {
      this.contactForm.controls[key].setValue(content[key])
    });
  }
}
