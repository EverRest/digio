export enum HTTP_METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export enum HTTP_STATUS_CODES {
  OK = 200,
  CREATED = 201,
  UNPROCESSABLE_ENTITY = 422,
  TOO_MANY_REQUESTS = 429,
}

export type HandleServerErrorType = {
  errorMessage: string;
};

export interface ServerResponse<T> {
  data: T;
  meta?: ServerResponsePaginationMeta;
}

export interface ServerResponsePaginationLinks {
  first: string;
  last: string;
  prev: null | string;
  next: null | string;
}

export interface ServerResponsePaginationMeta {
  current_page: number;
  last_page: number;
  from: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
}
