import Technology from "./Technology";

class Project {
    projectId: number | null;
    projectName: string;
    projectType: string;
    projectDescription: string;
    projectImgURL: string;
    technologiesUsed:Array<Technology>


    constructor(projectId: number = 0, projectName: string = "", projectType:string = "", projectDescription: string = "", projectImgURL: string ="", technologiesUsed: Array<Technology> = []) {
        this.projectId = projectId;
        this.projectName = projectName;
        this.projectType = projectType;
        this.projectDescription = projectDescription;
        this.projectImgURL = projectImgURL;
        this.technologiesUsed = technologiesUsed;
    }


    setCurrentProject(projectId: number, projectName: string, projectDescription: string, projectImgURL: string) {
        this.projectId = projectId;
        this.projectName = projectName;
        this.projectDescription = projectDescription;
        this.projectImgURL = projectImgURL;
    }

}

export default Project;