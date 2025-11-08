import { Tag } from './Tags';
export interface Project {
    id: number;
    name: string;
    summary: string;
    description: string;
    images: string[];
    link: string;
    tags: Tag[];
}