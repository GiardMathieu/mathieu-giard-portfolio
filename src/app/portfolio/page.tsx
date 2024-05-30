"use client"
import Carousel from "../components/Carousel";
import Image from "next/image";
import { technologyArray } from "./Technologies";
import Project from "./project";
import { projectArray } from "./projects"

import { useState } from "react";
import background1 from "../../../public/images/background1.jpg"

export default function Portfolio() {
    let projectIdx: number = 0;
    const [currentProject,  setCurrentProject] = useState(projectArray[0]);
    
    const NextProjectButton = () => {
        const handleMouseEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            projectIdx++;
            setCurrentProject(projectArray[projectIdx]);
            
        }

        return (
            <button onClick={handleMouseEvent}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg> 
            </button>
        )
    }

    const PreviousProjectButton= () => {
        const handleMouseEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            if (projectIdx === 0) {
                projectIdx = projectArray.length-1;
                setCurrentProject(projectArray[projectIdx])
            } else {
                projectIdx--;
                setCurrentProject(projectArray[projectIdx]);
            }
        }
        return (
            <button onClick={handleMouseEvent}>                        
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </button>
        )
    }

    

    return (
        <div className="h-screen" style={{overflow:"hidden"}}>
            <div className="h-1/2 p-10">
                <Image src="/images/background1.jpg" layout="fill" objectFit="cover" quality={100} className="absolute -z-10" alt="backgroundImage1"/>
                <h2 className="text-center font-bold">Voici mes projets dont je suis fier de vous montrer</h2>
                <Carousel usedArray={projectArray}/>
            </div>
            <div className="h-1/2 p-40">
                <h2 className="text-center font-bold">Voici les technologies que j'ai appris et utiliser durant mon apprentissage</h2>
                <Carousel usedArray={technologyArray}/>
            </div>
        </div>
    )
}