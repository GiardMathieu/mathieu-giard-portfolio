import Technology from "../portfolio/Technology";
import './TechnologyCard.css'
import Image from "next/image";

export default function TechnologyCard(props: {technology: Technology}) {
    return (
        <div className="card">
            <figure className="px-10 pt-10">
                <Image src={props.technology.technologyImg} className="card-img" alt={props.technology.technologyName} width={450} height={600}/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{props.technology.technologyName}</h2>
                <p>{props.technology.technologyType}</p>
                <div className="card-actions">
                    <a className="btn btn-primary" href={props.technology.technologyDoc}>En savoir plus</a>
                </div>
            </div>
        </div>    
    
    )
}