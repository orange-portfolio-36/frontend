"use client"
import { useState, useEffect } from "react";
import Card from "@/components/ui/Card/Card";

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

  return (

    <>

  <Card>
    <span>
    Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis
    </span>
  </Card>
    
    
    <Card className="w-[389px] h-[290px] bg-lime-500">
  
  {state.map(e => (
      <div key={e.id} >
  
        <img src={e.url_image} alt="image of project" className="w-[389px] h-[258px]" />
  
  
        
        
      </div>
    ))}
  
    
      
    </Card>
    </>

  
  
  )
}

