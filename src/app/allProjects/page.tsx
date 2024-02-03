"use client"
import { useState, useEffect } from "react";

export default function page() {

  type ProjectType = {
    id: number;
    name: string;
    description: string;
    url_project: string;
    url_image: string;
    userId: number;
    ProjectTag: {
      projectId: number;
      tagId: number;
      Tag: {
        id: number;
        name: string;
      };
    }[];
  };

  const [state, setState] = useState<ProjectType[]>([]);
  useEffect(() => {
   
    const fetchData = async () => {

      const response = await fetch('http://localhost:3001/project/all');
      const data = await response.json();
  
        return setState(data)
        
      
      };
      
      fetchData()
      
  }, []); 

  console.log(state)

  return (
    <div>
      {state?.map((e) => (
    <div key={e.id}>
     {e.name}
     {e.ProjectTag.map((t) => (
            <span key={t.tagId}>{t.Tag.name}</span>
          ))}
    </div>
  ))}
    </div>
  )
}

