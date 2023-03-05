import { useUserSession } from '@/stores/userSession';
import axios, { type AxiosInstance, type AxiosResponse } from 'axios';

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

export async function deleteAsync<T>(endpoint: string): Promise<AxiosResponse> {
  return await useJotSauceApi().delete<T>(endpoint);
}

export async function getAsync<T>(endpoint: string): Promise<AxiosResponse> {
  return await useJotSauceApi().get<T>(endpoint);
}

export async function patchAsync<T>(endpoint: string, body?: {}): Promise<AxiosResponse> {
  return await useJotSauceApi().patch<T>(endpoint, body);
}

export async function postAsync<T>(endpoint: string, body?: {}): Promise<AxiosResponse> {
  return await useJotSauceApi().post<T>(endpoint, body);
}

export async function putAsync<T>(endpoint: string, body?: {}): Promise<AxiosResponse> {
  return await useJotSauceApi().put<T>(endpoint, body);
}
