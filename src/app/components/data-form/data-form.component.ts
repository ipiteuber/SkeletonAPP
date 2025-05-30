import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
  animations: [
    trigger('shake', [
      transition('* => true', [
        animate('0.1s', style({ transform: 'translateX(-10px)' })),
        animate('0.1s', style({ transform: 'translateX(10px)' })),
        animate('0.1s', style({ transform: 'translateX(-6px)' })),
        animate('0.1s', style({ transform: 'translateX(6px)' })),
        animate('0.1s', style({ transform: 'translateX(0)' }))
      ])
    ])
  ],
  standalone: false
})
export class DataFormComponent {
  form: FormGroup;
  shakeName = false;
  shakeLastName = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      education: [''],
      birthDate: ['']
    });
  }

  clearFields() {
    this.form.reset();

    this.shakeName = false;
    this.shakeLastName = false;

    setTimeout(() => {
      this.shakeName = true;
      this.shakeLastName = true;
    }, 0);
  }

  showData() {
    const { name, lastName } = this.form.value;
    alert(`Name: ${name}\nLast Name: ${lastName}`);
  }
}
