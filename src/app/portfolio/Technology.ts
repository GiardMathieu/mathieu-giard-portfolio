class Technology {
    technologyId: number;
    technologyName: string;
    technologyType: string;
    technologyDoc: string;
    technologyImg: string;
    

    constructor(technologyId: number = 0, technologyName: string = "", technologyType: string = "", technologyDoc: string = "", technologyImg: string = "") {
        this.technologyId = technologyId;
        this.technologyName = technologyName;
        this.technologyType = technologyType;
        this.technologyDoc = technologyDoc;
        this.technologyImg = technologyImg;

    }


}

export default Technology