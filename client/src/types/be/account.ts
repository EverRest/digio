export interface Account {
    id: number;
    _id: string;
    accountName: string;
    accountType: string;
    description: string;
    link: string;
    tags: string[];
    image: string | null;
}

export interface AccountShowType {
    id: number;
    _id: string;
    accountName: string;
    description: string;
    link: string;
    image: string | null;
    tags: string[];
    encryptedCredentials: object;
    accountType: string;
}
