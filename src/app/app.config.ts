import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { onboardingReducer } from './store/onboarding.reducer';
import { provideEffects } from '@ngrx/effects';
import * as OnboardingEffects from './store/onboarding.effect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideStore({ onboarding: onboardingReducer }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
    provideEffects(OnboardingEffects),
    importProvidersFrom(BrowserAnimationsModule),
  ],
};
