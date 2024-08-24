export interface Client {
  id: number;
  _id: string;
  name: string;
  code: string;
  domain: string;
  logo: string;
  modules: string[];
  is_enabled: boolean;
}

export interface ClientShowType {
  id: number;
  _id: string;
  name: string;
  code: string;
  domain: string;
  is_enabled: boolean;
  zapier_email: string | null;
  modules: string[];
  images: {
    logo: string;
  };
  integrations: string[];
}
