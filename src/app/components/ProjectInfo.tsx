'use client'

import Project from "../portfolio/project";
import './ProjectInfo.css'

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
            <img  className="project_img" src={props.project.projectImgURL}/>
            <span className="project_type">{props.project.projectType}</span>
        </div>
    )
}