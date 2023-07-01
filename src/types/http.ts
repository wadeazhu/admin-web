import { AxiosRequestHeaders, Method } from 'axios'

export type optionsType = {
  url: string;
  method?: Method;
  data?: any;
  isFormData?: boolean;
  headers?: AxiosRequestHeaders;
  responseType?: any
}
export interface BasicResult<T> {
  code: number;
  data: T;
  message?: string
}

export interface BasicPageParams {
  pageNum: number;
  pageSize: number;
}
