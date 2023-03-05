import type { AccessTokenInterface } from './access-token.interface';

export interface AuthenticationResponseInterface {
  accessToken: AccessTokenInterface;
  plainTextToken: string;
}
