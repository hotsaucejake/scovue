export interface ServiceData<T> {
  type: 'data' | 'error';
  code?: string;
  status?: number;
  statusText?: string;
  data?: T;
  message?: string;
}
