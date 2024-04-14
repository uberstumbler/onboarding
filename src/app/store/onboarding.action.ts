import { createAction, props } from '@ngrx/store';
import { User } from '../models/user';

export const saveUser = createAction('[Onboarding] save', props<{ user: User }>());
