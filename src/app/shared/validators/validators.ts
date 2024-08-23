import { FormControl, FormGroup } from '@angular/forms';

export function markAsDirty(form: FormGroup) {
  const controls = Object.keys(form.controls);
  controls.forEach((key) => {
    const control = form.controls[key];
    if (control instanceof FormGroup) {
      markAsDirty(control);
    } else if (control instanceof FormControl) {
      control.markAsDirty({
        onlySelf: true,
      });
    }
  });
}
