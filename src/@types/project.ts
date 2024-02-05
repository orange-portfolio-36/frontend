export interface Project {
  id: number;
  name: string;
  description: string;
  url_project: string;
  url_image: string;
  userId: number;
  createdAt: Date;
  ProjectTag: ProjectTag
  User: {
    firstName: string;
    lastName: string;
  }
}

interface ProjectTag {
  Tag: Tag;
  projectId: number;
  tagId: number;
}

interface Tag {
  id: number;
  name: string;
}
