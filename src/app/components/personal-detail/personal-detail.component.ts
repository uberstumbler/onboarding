import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { saveUser } from '../../store/onboarding.action';
import { User } from '../../models/user';
import { first } from 'rxjs/operators';
import { OnboardingState } from '../../models/onboarding-state';
import { Subscription } from 'rxjs';
import { fadeIn } from '../../animations/fade-in';

@Component({
  selector: 'app-personal-detail',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './personal-detail.component.html',
  styleUrl: './personal-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn],
})
export class PersonalDetailComponent implements OnInit, OnDestroy {
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly store: Store<{ onboarding: OnboardingState }> = inject(Store);
  private valueChangeSubscription!: Subscription;
  form!: FormGroup;
  isErrorVisible: WritableSignal<boolean> = signal(false);

  ngOnInit(): void {
    this.store
      // eslint-disable-next-line @ngrx/prefer-selector-in-select
      .select('onboarding')
      .pipe(first())
      .subscribe((state: OnboardingState) => {
        this.initForm(state.user);
      });
  }

  ngOnDestroy(): void {
    this.valueChangeSubscription && this.valueChangeSubscription.unsubscribe();
  }

  save() {
    if (this.form.invalid) {
      this.isErrorVisible.set(true);
      return;
    }

    this.store.dispatch(saveUser({ user: { ...this.form.value } }));
  }

  private initForm(user?: User) {
    this.form = this.fb.group({
      gender: [user?.gender || '', [Validators.required]],
      firstName: [user?.firstName || '', [Validators.required]],
      lastName: [user?.lastName || '', [Validators.required]],
      dateOfBirth: this.fb.group({
        day: [user?.dateOfBirth.day || '', [Validators.required]],
        month: [user?.dateOfBirth.month || '', [Validators.required]],
        year: [user?.dateOfBirth.year || '', [Validators.required]],
      }),
      nationality: [user?.nationality || '', [Validators.required]],
    });

    this.form.valueChanges.subscribe(() => {
      this.isErrorVisible.set(false);
    });
  }
}
