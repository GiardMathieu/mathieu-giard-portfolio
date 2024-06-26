

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Technology from "../portfolio/Technology";
import Project from "../portfolio/project";

import './ProjectCard.css'

export default function Cards(props: {project: Project}) {
    const [readMore, setReadMore] = useState(true)

    
    
    return (
        <div className="card">
            <figure className="px-10 pt-10">
                <Image src={props.project.projectImgURL} alt={props.project.projectName}/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"> {props.project.projectName} </h2>
                <p>{props.project.projectType}</p>

            </div>
        </div>
        
    )
}