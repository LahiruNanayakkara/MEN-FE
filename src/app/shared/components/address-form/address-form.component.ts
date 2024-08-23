import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { markAsDirty } from '../../validators/validators';
import { cities } from '../../../../cities';
import { provinces } from '../../../../provinces';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss',
})
export class AddressFormComponent implements OnInit {
  addressForm: FormGroup;
  cities: string[] = [];
  provinces: string[] = [];
  @Output('afterSubmitted') afterSubmitted = new EventEmitter<{
    [key: string]: any;
  }>();

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      street: ['', [Validators.required]],
      apartment: [''],
      city: ['', [Validators.required]],
      province: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
    });
  }

  ngOnInit(): void {
    this.cities = cities;
    this.provinces = provinces;
  }

  onSubmit() {
    if (this.addressForm.valid) {
      this.afterSubmitted.emit(this.addressForm.value);
    } else {
      markAsDirty(this.addressForm);
    }
  }

  setValues(content: { [key: string]: any }) {
    Object.keys(this.addressForm.controls).forEach((key) => {
      this.addressForm.controls[key].setValue(content[key])
    });
  }
}
