'use client'

import Project from "../portfolio/project";
import './ProjectInfo.css'
import Image from "next/image";

export default function ProjectInfo(props: {project: Project}) {

    
    return (
        <div className="project_info">
            <h1 className="font-bold">
                {
                    props.project.projectName.length < 26 ?
                        <>{props.project.projectName}</>:
                        <>{props.project.projectName.slice(0,26)} ... </>
                }
                
            </h1>
            <Image className="project_img" src={props.project.projectImgURL} alt={props.project.projectName} width={250} height={200}/>
            <span className="project_type">{props.project.projectType}</span>
        </div>
    )
}