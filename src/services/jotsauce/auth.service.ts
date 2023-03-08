import { postAsync } from '@/composables/useJotSauceApi';
import type { AuthenticationResponseInterface } from './interfaces/auth/authentication-response.interface';
import type { UserCredentialsInterface } from './interfaces/auth/user-credentials.interface';
import type { ServiceResponse } from './interfaces/service-response.interface';

const baseUrl = 'api/auth/';

export async function login(userCredentials: UserCredentialsInterface): Promise<ServiceResponse<AuthenticationResponseInterface>> {
  return await postAsync<AuthenticationResponseInterface>(baseUrl + 'login', userCredentials);
}
