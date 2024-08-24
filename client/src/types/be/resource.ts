export interface Resource {
    id: number;
    _id: string;
    name: string;
    resourceType: string;
    description: string;
    url: string;
    image: string;
    tags: string[];
    updatedAt: string;
}

export interface ResourceShowType {
    _id: string;
    url: string;
    name: string;
    description: string;
    resourceType: string;
    encryptedCredentials: object;
    image: string;
    tags: string[];
    updatedAt: string;
}
