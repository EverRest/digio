export interface Project {
    id: string;
    name: string;
    description: string;
    email?: string;
    password?: string;
    projectType: string;
    url: string;
    tags: string[];
    farmDescription: string;
    start?: string;
    end?: string;
}

export interface ProjectPayload {
    name: string;
    description: string;
    email?: string;
    password?: string;
    projectType: string;
    url: string;
    tags: string[];
    farmDescription: string;
    start?: string;
    end?: string;
}

export type IdPropType = {
    id: string;
};