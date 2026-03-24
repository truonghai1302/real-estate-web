import { InjectionToken, Provider } from '@angular/core';
import { environment as serverEnvironmentBase } from '../../../environments/environment.server';

export const SERVER_ENVIRONMENT = new InjectionToken<typeof serverEnvironmentBase>('Server Environment');

export const provideServerEnvironment: Provider = {
  provide: SERVER_ENVIRONMENT,
  useFactory: () => {
    return {
      ...serverEnvironmentBase,
      apiToken: process.env['API_TOKEN'] || serverEnvironmentBase.apiToken,
    };
  },
};
