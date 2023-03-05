import { postAsync } from '@/composables/useJotSauceApi';
import type { AxiosResponse } from 'axios';
import type { AuthenticationResponseInterface } from './interfaces/auth/authentication-response.interface';
import type { UserCredentialsInterface } from './interfaces/auth/user-credentials.interface';

const baseUrl = 'api/auth/';

export async function login(userCredentials: UserCredentialsInterface): Promise<AxiosResponse<AuthenticationResponseInterface>> {
  return await postAsync<AxiosResponse>(baseUrl + 'login', userCredentials);
}
