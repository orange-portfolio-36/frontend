"use client"
import { useState, useEffect } from "react";
import Card from "@/components/ui/Card/Card";
import 'tailwindcss/tailwind.css'


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
        <div className="w-[312px] h-[120px] mt-[128px] 
        font-sans font-normal text-2xl/[24px] text-center m-auto" >
        Junte-se à comunidade de inovação, inspiração e descobertas, 
        transformando experiências em conexões inesquecíveis
        </div>
    </>
  )
}