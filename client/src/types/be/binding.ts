export interface Role {
  id: number;
  name: string;
  code: string;
}

export interface Salutation {
  id: number;
  code: string;
  name: string;
}

export interface FileTreeFile {
  id: number;
  name: string;
  url: string;
  has_relation: boolean;
  extension: string;
}

export interface File extends FileTreeFile {
  id: number;
  name: string;
  size: string;
  url: string;
  has_relation: boolean;
  path: string;
  extension: string;
}

export interface Wallet {
  id: number;
  _id: string;
  address: string;
  description: string;
  image: string;
  name: string;
  walletName: string;
  walletType: string;
}
