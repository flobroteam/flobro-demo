export class Profile {
    public gender: boolean;
    public age: number;
    public height: number;
    public weight: number;
    public fatPercentage: number;
    public bodyType: string;
    public activityLevel: string;

    public sleepTime: number;

    public physicalSetback: boolean;

    public objectives: number;

    public session: number;

    public experience: string;


    public mealAmount: number;

    public macroType: string;

    constructor(values: any = {}) {
        this.gender = values.boolean || true;
        this.age = values.age || 13;
        this.height = values.height || 36;
        this.weight = values.weight || 60;
        this.fatPercentage = values.fatPercentage || 2;
        this.bodyType = values.bodyType || 'Ectomorph';
        this.activityLevel = values.activityLevel || 'Sedantary';

        this.sleepTime = values.sleepTime || 480;

        this.physicalSetback = values.physicalSetback || false;

        this.objectives = values.objectives || 0;

        this.session = values.session || 1;

        this.experience = values.experience || '';

        this.mealAmount = values.mealAmount || 1;
        this.macroType = values.macroType || 'Moderate';
    }

    public get getGenderString() {
        return this.gender ? 'Male' : 'Female';
    }

    public get getBodyProfile(): any {
        return {
            sex: this.gender ? 'Male' : 'Female',
            age: this.age + " yrs old",
            weight: this.weight + " lbs",
            height: this.getHeightStr,
            bodyFat: this.fatPercentage + "%",
            bodyType: this.bodyType,
            activityLevel: this.activityLevel,
            sleepTime: this.getSleepTimeStr,
            goal: this.objectives + " lbs/week"
        };
    }

    public get getGenderStr(): string {
        return this.gender ? 'Male' : 'Female';
    }

    public get getAgeStr(): string {
        return this.age + " yrs old";
    }

    public get getWeigthStr(): string {
        return this.weight + " lbs";
    }

    // public get getHeigthStr(): string {
    //     return this.height + " in";
    // }

    public get getBodyFatStr(): string {
        return this.fatPercentage + "%";
    }

    public get getSleepTimeStr(): string {
        const hours: number = Math.trunc(this.sleepTime / 60);
        const minutes: number = this.sleepTime % 60;
        return hours + " hrs" +  (minutes ? " " + minutes + ' mins' : '');
    }

    public get getSleepHrString() {
        return Math.trunc(this.sleepTime / 60);
    }

    public get getSleepMinString() {
        return this.sleepTime % 60;
    }

    public get getGoalStr(): string {
        return this.objectives + " lbs/week";
    }


    public get getHeightStr(): string {
        const feet: number = Math.trunc(this.height / 12);
        const inches: number = this.height % 12;
        return feet + ' fts' + (inches ? ' ' + inches + ' ins' : '');
    }

    public get getHeightFtString() {
        return Math.trunc(this.height / 12);
    }

    public get getHeightInString() {
        return this.height % 12;
    }

    public get getTraining(): any {
        return {

        };
    }

    public get getNutrition(): any {
        return {
            mealFrequency: this.mealAmount,
            dietSelection: this.macroType
        };
    }

    public get getPhysicalSetbackString() {
        return this.physicalSetback ? 'Do' : 'Do Not';
    }

    public get getObjectivesString() {
        if (this.objectives > 0) {
            return 'Gain ' + this.objectives + '+ lbs per week';
        } else if (this.objectives < 0) {
            return 'Lose ' + Math.abs(this.objectives) + '+ lbs per week';
        } else {
            return 'Maintain weight';
        }
    }
}
