export interface ServerResponse<T> {
  data: T;
}

export interface ServerPaginatedResponse<T> {
  data: T;
  meta: PaginationMeta;
}

export interface PaginationMeta {
  current_page: number;
  last_page: number;
  from: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
}
