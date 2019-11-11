export class Profile {
    public gender: boolean;
    public age: number;
    public height: number;
    public weight: number;
    public fatPercentage: number;
    public bodyType: string;

    public sleepTime: number;

    public physicalSetback: boolean;

    public objectives: number;

    public session: number;

    public experience: string;


    public mealAmount: number;


    constructor(values: any = {}) {
        this.gender = values.boolean || true;
        this.age = values.age || 13;
        this.height = values.height || 36;
        this.weight = values.weight || 60;
        this.fatPercentage = values.fatPercentage || 2;
        this.bodyType = values.bodyType || '';

        this.sleepTime = values.sleepTime || 8;

        this.physicalSetback = values.physicalSetback || false;

        this.objectives = values.objectives || 0;

        this.session = values.session || 1;

        this.experience = values.experience || '';

        this.mealAmount = values.mealAmount || 1;
    }
}
