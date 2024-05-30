class Project {
    projectId: number;
    projectName: string;
    projectDescription: string;
    projectImgURL: string;


    constructor(projectId: number, projectName: string, projectDescription: string, projectImgURL: string) {
        this.projectId = projectId;
        this.projectName = projectName;
        this.projectDescription = projectDescription;
        this.projectImgURL = projectImgURL;
    }

    setCurrentProject(projectId: number, projectName: string, projectDescription: string, projectImgURL: string) {
        this.projectId = projectId;
        this.projectName = projectName;
        this.projectDescription = projectDescription;
        this.projectImgURL = projectImgURL;
    }

}

export default Project;