import type { ServiceData } from '@/services/jotsauce/interfaces/service-data.interface';
import type { ServiceResponse } from '@/services/jotsauce/interfaces/service-response.interface';
import { useUserSession } from '@/stores/userSession';
import axios, { AxiosError, type AxiosInstance, type AxiosResponse } from 'axios';

let api: AxiosInstance;

export function createJotSauceApi() {
  // Here we set the base URL for all requests made to the api
  api = axios.create({
    baseURL: import.meta.env.VITE_JOTSAUCE_API_URL,
  });

  // We set an interceptor for each request to
  // include Bearer token to the request if user is logged in
  api.interceptors.request.use(function (config) {
    const userSession = useUserSession();

    if (userSession.isAuthenticated) {
      config.headers.setAuthorization(`Bearer ${userSession.token}`);
    }

    return config;
  });

  return api;
}

export function useJotSauceApi() {
  if (!api) {
    createJotSauceApi();
  }
  return api;
}

function createError<T>(error: AxiosError): ServiceResponse<T> {
  const retError = {
    type: 'error',
    code: error.code,
    message: error.message,
    status: error.response?.status,
    statusText: error.response?.statusText,
    data: error.response?.data,
  } as ServiceResponse<T>;

  if (retError.status === 401) {
    // CLEAR AUTHENTICATION HERE
  } else if (retError.status === 403) {
    // do something
  }

  return retError;
}

function createData<T>(response: AxiosResponse): ServiceData<T> {
  return {
    type: 'data',
    status: response.status,
    statusText: response.statusText,
    data: response.data,
  } as ServiceData<T>;
}

export async function postAsync<T>(endpoint: string, body?: {}): Promise<ServiceResponse<T>> {
  let retResp = {} as ServiceResponse<T>;

  try {
    const resp = await useJotSauceApi().post<T>(endpoint, body);
    retResp = createData(resp);
  } catch (e) {
    retResp = createError<T>(e as AxiosError<T>);
  }

  return retResp;
}

export async function getAsync<T>(endpoint: string): Promise<ServiceResponse<T>> {
  let retResp = {} as ServiceResponse<T>;

  try {
    const resp = await useJotSauceApi().get<T>(endpoint);
    retResp = createData(resp);
  } catch (e) {
    retResp = createError<T>(e as AxiosError<T>);
  }

  return retResp;
}

export async function patchAsync<T>(endpoint: string, body?: {}): Promise<ServiceResponse<T>> {
  let retResp = {} as ServiceResponse<T>;

  try {
    const resp = await useJotSauceApi().put<T>(endpoint, body);
    retResp = createData(resp);
  } catch (e) {
    retResp = createError<T>(e as AxiosError<T>);
  }

  return retResp;
}

export async function deleteAsync<T>(endpoint: string): Promise<ServiceResponse<T>> {
  let retResp = {} as ServiceResponse<T>;

  try {
    const resp = await useJotSauceApi().delete<T>(endpoint);
    retResp = createData(resp);
  } catch (e) {
    retResp = createError<T>(e as AxiosError<T>);
  }

  return retResp;
}
