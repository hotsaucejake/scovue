import type { ErrorMessage } from '@/services/jotsauce/interfaces/error-message.interface';
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

  // right now I'm struggling with checking if types/interfaces exist
  // I'm purely going to code the intended action of what I need retError to be
  // we should have a conditional that checks if error.response.data.errors exists
  // if it does, then loop through the array of errors and add it retError.errors
  // I'll leave the attempts to make everything right commented out below to come back to it later
  if (Object.getOwnPropertyNames(error.response?.data).includes('message')) {
    retError.errorMessage = error.response?.data.message;
  }

  retError.errors = [];

  if (Object.getOwnPropertyNames(error.response?.data).includes('errors')) {
    Object.keys(error.response?.data.errors).forEach((key) => {
      error.response?.data.errors[key].forEach((errorMessage: string) => {
        retError.errors?.push({
          name: key,
          error: errorMessage,
        } as ErrorMessage);
      });
    });
  }

  // let errors: any[] = [];
  // if ('errors' in Object.getOwnPropertyNames(retError.data)) {
  //   errors = retError.data?.errors;
  // }

  // Object.keys(errors).forEach((key) => {
  //   errors[key].forEach((errorMessage: string) => {
  //     retError.errors?.push({
  //       name: key,
  //       error: errorMessage,
  //     } as unknown as ErrorMessage);
  //   });
  // });

  // console.log('errors' in Object.getOwnPropertyNames(retError.data));
  // Object.values(retError.data);
  // if ('errors' in Object.proper(retError.data)) {
  //   console.log(retError.data!.errors);
  // }

  // retError.errors!.message = (error.response?.data as ErrorResponse<T>).message ?? '';
  // retError.errors!.errors = (error.response?.data as ErrorResponse<T>).errors;

  // console.log('createError');
  // console.log(retError);
  // console.log('createError');
  // if (retError.errors?.errors) {
  //   console.log()
  //   Object.keys(retError.errors.errors).forEach((key) => {
  //     console.log(key);
  //   });
  // }
  // if ('errors' in (error.response?.data as ErrorResponse)) {
  //   retError.data = [];
  //   Object.keys((error.response?.data as ErrorResponse).errors).forEach((key) => {
  //     error.response?.data.errors[key].forEach((errorMessage: string) => {
  //       retError.data?.push({
  //         name: key,
  //         error: errorMessage,
  //       } as ErrorResponse);
  //     });
  //   });
  // }

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
