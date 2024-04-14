import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { saveUser } from './onboarding.action';
import { OnboardingState } from '../models/onboarding-state';

export const saveUserEffect = createEffect(
  () => {
    return inject(Actions).pipe(
      ofType(saveUser),
      tap(({ user }) => {
        const storedStateString = localStorage.getItem('onboarding');
        const storedState: OnboardingState = storedStateString ? JSON.parse(storedStateString) : ({} as OnboardingState);
        storedState['user'] = user;

        localStorage.setItem('onboarding', JSON.stringify(storedState));
      })
    );
  },
  { functional: true, dispatch: false }
);
