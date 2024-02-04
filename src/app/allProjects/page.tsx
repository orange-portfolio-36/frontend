"use client"
import { useState, useEffect } from "react";
import Card from "@/components/ui/Card/Card";
import TextField from "@/components/ui/TextField/TextField";
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
        <div className="w-[312px] md:w-[744px] h-[120px] md:h-[102px]  mt-[128px] md:t-[185px]
        font-sans font-normal  text-2xl/[24px] md:text-[34px]/[34px] text-center m-auto" >
        Junte-se à comunidade de inovação, inspiração e descobertas, 
        transformando experiências em conexões inesquecíveis
        </div>

        <div className="w-[100%] md:w-[50%] h-auto mt-[50px] md:mt-[120px] flex md:ml-[18px] "  >
          <TextField className="w-[312px] md:w-[723px] h-[56px] rounded-[4px] border-[1px] m-auto md:m-[1px]  " placeholder="Buscar tags" />
        </div>

        <div className="md:mt-[17px] md:grid md:grid-cols-3 md:gap-8" >
          {state.map((t,i) => (
            <Card key={t.id} className=" w-[312px] md:w-[389px] h-[298px] md:h-[290px] mt-[30px] m-auto border-none shadow-none " >

            <img  src={t.url_image} alt="image of project" className="w-[100%] h-[80%]" />

            <div className="flex justify-between w-[100%] h-[40px] mt-[10px]  " >

              <div className="  w-[190px] h-[32px] flex justify-between " >

                <div className="mt-[7px]" >
                  <img  src={t.url_image} alt="image of project" className="w-[24px] h-[24px] rounded-[100%] " />
                </div>

                   
                 <div className="flex w-[158px] h-[16px] font-sans font-normal text-base  m-auto  " > 
                  <div className="w-[100%] text-center " >Pedro Castillo - </div>
                    {(i + 1) +"/"+state.length}
                    </div> 
              </div>

              <div  className="  w-[94px] h-[32px] flex justify-end  "> 
                <div className="w-[46px] h-[32px] bg-silver-400 bg-slate-200 rounded-[100px] text-center  flex align-center  p-[4px]" >
                 <div className="w-[38px] h-[24px] mt-auto " >{t.ProjectTag.map(e => e.Tag.name)}</div> 
                  </div>
               </div>
            </div>
            
            </Card>
          ))}
        </div>
    </>
  )
}