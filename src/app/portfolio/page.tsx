"use client"

import './Portfolio.css'
import Image from "next/image";
import { technologyArray } from "./Technologies";
import Project from "./project";
import { projectArray } from "./projects"

import { useState, useEffect } from "react";
import Technology from "./Technology";
import TechnologyCard from '../components/TechnologyCard';
import ProjectInfo from '../components/ProjectInfo';
import Pagination from '../navigation/pagination';


export default function Portfolio() {
    //Pagination for the projects
    const [currentProject, setCurrentProject] = useState(new Project());
    const [currentPageProject, setCurrentPageProject] = useState(1);
    const projectsPerPage = 6;
    const numberOfProjectPages = Math.ceil(projectArray.length / projectsPerPage);
    const indexOfLastProject = currentPageProject  * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projectArray.slice(indexOfFirstProject, indexOfLastProject);

    //Pagination for the technologies
    const [currentPageTech, setCurrentPageTech] = useState(1);
    const techsPerPage = 6;
    const numberOfTechPages = Math.ceil(technologyArray.length/techsPerPage);
    const indexOfLastTech = currentPageTech * techsPerPage;
    const indexOfFirstTech = indexOfLastTech - techsPerPage;
    const currentTechs = technologyArray.slice(indexOfFirstTech, indexOfLastTech);

    
    useEffect(() => {
        
    }, [])
    


    return (
        <>
            {
                currentProject.projectId != 0 ?
                <div id='project_information_overlay'>
                    <div id='project_information' className='hero bg-info text-neutral'>
                        <div className='hero-content'>
                            <img src={currentProject.projectImgURL} className='project_image' alt={currentProject.projectName}/>
                            <div className='max-w-md'>
                                <h1 className='text-2xl pb-2 font-bold'>{currentProject.projectName}</h1>
                                <p className='py-6'>{currentProject.projectDescription}</p>
                                <div className='row'>
                                    {
                                        currentProject.technologiesUsed.map(technology => (
                                            <div className='image_column' key={technology.technologyId}>
                                                <figure className='tooltip tooltip-bottom tooltip-info' data-tip={technology.technologyName}>
                                                    <img src={technology.technologyImg} className='image_project_modal' alt={technology.technologyName}/>
                                                </figure>
                                            </div>
                                            
                                        ))
                                    }
                                </div>
                            </div>
                            
                        </div>
                        <button className='close_projectModal' onClick={() => setCurrentProject(new Project())}> x </button>                        
                    </div>
                </div>:
                <></>
            }

            <div className={`relative z-0  text-neutral`}>

                <h1 id="title"className="text-center font-bold"> Voici les projets dont je suis fier de vous montrer !</h1>
                <div id='projectInfo' className='h-1/2 text-center'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 items-center justify-items-center'>
                        {
                            currentProjects.map(project => (
                                <a key={project.projectId} onClick={() => setCurrentProject(project)}>
                                    <ProjectInfo key={project.projectId} project={project}/>
                                </a>
                            ))
                        }
                    </div>
                    <Pagination
                     numberOfPages={numberOfProjectPages}
                     currentPage={currentPageProject}
                     setCurrentPage={setCurrentPageProject}
                    />
                </div>
                <hr className="mt-10 pt-10" style={{height: "30px", color:"transparent"}}></hr>
                

                <div id="TechnologyDiv" className='h-1/2 text-center'>
                    <h1 id='title' className='text-center font-bold'>Voici les technologies que j&apos;ai appris durant mon parcours</h1>
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 items-center justify-items-center '>
                    {
                        currentTechs.map(technology => (
                            <TechnologyCard key={technology.technologyId} technology={technology}/>
                        ))
                    }
                    </div>
                    <Pagination
                     numberOfPages={numberOfTechPages}
                     currentPage={currentPageTech}
                     setCurrentPage={setCurrentPageTech}
                    />
                </div>

            </div>

        </>
    )
}