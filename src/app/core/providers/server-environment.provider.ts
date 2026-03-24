import { InjectionToken, Provider } from '@angular/core';
import { environment } from '../../../environments/environment.server';

export const SERVER_ENVIRONMENT = new InjectionToken<typeof environment>('Server Environment');

export const provideServerEnvironment: Provider = {
  provide: SERVER_ENVIRONMENT,
  useValue: environment,
};
