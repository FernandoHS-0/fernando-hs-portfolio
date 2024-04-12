import Image from "next/image";
import Link from "next/link";
import { project_list } from "@/mocks/projects";
import { GoLinkExternal } from "react-icons/go";

const Projects = () => {
    return (
        <>
            {project_list.map((item) => (
                <div className="flex flex-col-reverse lg:flex-row mt-5" key={item.id}>
                    <div className="w-full lg:w-1/3">
                        <Image 
                            src={item.imagen}
                            alt="project"
                            width={800}
                            height={250}
                            className="h-full w-full"
                        />
                    </div>
                    <div className="w-full lg:w-2/3 flex flex-col py-10 bg-primary-lavender bg-opacity-30 hover:bg-opacity-50 duration-300">
                        <div className="text-center mb-5">
                            <a href={item.url} target="_blank" className="uppercase kanit-regular mb-2">
                                <div className="flex justify-center items-center gap-1">
                                    {item.titulo} 
                                    <GoLinkExternal/> 
                                </div>
                            </a>
                            <p className="text-sm">{item.descripcion}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {item.stack.map((tech) => (
                                <div className="border border-white text-white px-3 py-1" key={tech.id}>
                                    <p className="text-sm">{tech.nombre}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Projects;