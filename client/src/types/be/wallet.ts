export interface Wallet {
  id: number;
  _id: string;
  address: string;
  name: string;
  description : string;
  walletName: string;
  walletType: string;
  image: string;
  tags: string[];
  updatedAt: string;
}

export interface WalletShowType {
  _id: string;
  address: string;
  name: string;
  description : string;
  walletName: string;
  walletType: string;
  encryptedCredentials: object;
  image: string;
  tags: string[];
  updatedAt: string;
}
