export interface Project {
  id: number;
  name: string;
  description: string;
  url_project: string;
  url_image: string;
  userId: number;
  createdAt: Date;
  ProjectTag: ProjectTag[];
  User: {
    firstName: string;
    lastName: string;
  };
}

export type ProjectForm = Pick<
  Project,
  "name" | "url_project" | "url_image" | "description"
> & { tags: Tag[] };

interface ProjectTag {
  Tag: Tag[];
  projectId: number;
  tagId: number;
}

export interface Tag {
  id: number;
  name: string;
}
