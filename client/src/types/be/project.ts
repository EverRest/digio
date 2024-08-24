export interface Project {
    id: number;
    _id: string;
    name: string;
    projectType: string;
    description: string;
    url: string;
    image: string;
    tags: string[];
    farmDescription: string;
    start?: string;
    end?: string;
    updatedAt: string;
}

export interface ProjectShowType {
    _id: string;
    url: string;
    name: string;
    description: string;
    projectType: string;
    encryptedCredentials: object;
    image: string;
    tags: string[];
    farmDescription: string;
    start?: string;
    end?: string;
    updatedAt: string;
}
