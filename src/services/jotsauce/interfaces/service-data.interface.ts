import type { ErrorMessage } from './error-message.interface';
export interface ServiceData<T> {
  type: 'data' | 'error';
  code?: string;
  status?: number;
  statusText?: string;
  data?: T;
  message?: string;
  errorMessage?: string;
  errors?: ErrorMessage[];
}
