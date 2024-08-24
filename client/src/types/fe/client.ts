export interface PostClient {
  name: string;
  code: string;
  domain: string;
  module_code: string[];
}

export interface UpdateClient {
  module_code?: string[];
}
