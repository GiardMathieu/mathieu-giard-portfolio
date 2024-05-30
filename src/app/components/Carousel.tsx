import Project from "../portfolio/project";
import Technology from "../portfolio/Technology";

export default function Carousel(props: {usedArray: Array<Object>}) {
    let objectIdx: number = 0;
    return (
        <div className="carousel carousel-center" >
            {
                props.usedArray.map(arrayElement => (
                    <div className="carousel-item card w-1/3 shadow-xl" key={objectIdx++}>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">
                                {
                                    arrayElement instanceof Project ?
                                    arrayElement.projectName:
                            
                                    arrayElement instanceof Technology ?
                                    arrayElement.technologyName:
                                    <>Erreur avec le carousel (Invalid Object)</>
                                }
                            </h2>
                            <p>
                                {
                                    arrayElement instanceof Project ?
                                    arrayElement.projectDescription:
                                    arrayElement instanceof Technology ?
                                    arrayElement.technologyName:
                                    <>Erreur avec le carousel (Invalid Object)</>
                                }
                            </p>
                        </div>
                    </div>
                    
                ))

            };
        </div>
    )
}