import { User } from './../models/user';
import { createReducer, on } from '@ngrx/store';
import { OnboardingState } from '../models/onboarding-state';
import { saveUser } from './onboarding.action';

export const initialOnboardingState: OnboardingState = getStateFromLocalstorage();

export const onboardingReducer = createReducer(
  initialOnboardingState,
  on(saveUser, (state, { user }: { user: User }): OnboardingState => ({ ...state, user: { ...user } }))
);

function getStateFromLocalstorage(): OnboardingState {
  const storedStateString = localStorage.getItem('onboarding');
  const storedState: OnboardingState = storedStateString ? JSON.parse(storedStateString) : ({} as OnboardingState);
  return storedState;
}
