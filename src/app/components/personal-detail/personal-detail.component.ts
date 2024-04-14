import { NgClass } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-detail',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './personal-detail.component.html',
  styleUrl: './personal-detail.component.scss',
})
export class PersonalDetailComponent implements OnInit {
  private readonly fb: FormBuilder = inject(FormBuilder);

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      gender: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dateOfBirth: this.fb.group({
        day: ['', [Validators.required]],
        month: ['', [Validators.required]],
        year: ['', [Validators.required]],
      }),
      nationality: ['', [Validators.required]],
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }
  }
}
