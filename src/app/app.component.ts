import { Component, ɵConsole, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { Profile } from './model/profile';

import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    title = 'flobro-demo';
    public capi: boolean = true;

    value: number = 100;
    options: Options = {
        floor: 0,
        ceil: 200
    };

    profile = new Profile();

    ageOptions: Options = {
        floor: 13,
        ceil: 90
    }

    heightOptions: Options = {
        floor: 36,
        ceil: 95
    }

    weightOptions: Options = {
        floor: 60,
        ceil: 400
    }

    fatPercentageOptions: Options = {
        floor: 2,
        ceil: 40
    }

    public bodyTypes: any[] = [
        { type: 'Ectomorph', selected: true },
        { type: 'Endomorph', selected: false },
        { type: 'Mesomorph', selected: false }
    ];


    public activityTypes: any[] = [
        { type: 'Sedantary', description: 'Little to no exercise/ desk job', selected: true },
        { type: 'Lightly Active', description: 'Light exercise: sports 1-3 days per week/ server, nurse', selected: false },
        { type: 'Moderately Active', description: 'Moderate exercise: sports 3-5 days per week/ usher, host', selected: false },
        { type: 'Very Active', description: 'Heavy exercise: sports 6-7 days per week/ mostly physical: farmer, construction', selected: false },
        { type: 'Extremely Active', description: 'Very heavy exercise: sports, training 2x/day, mostly physical: farmer, construction', selected: false },
    ];

    public sleepTimeOptions: Options = {
        floor: 2,
        ceil: 16
    }

    public setbackTypes: any[] = [
        { type: 'Head & Neck ', description: 'Head & Neck  Face, Forehead, Cheek, Chin, Eye, Nose, Mouth, Lips, Ear, Jaw, Mandible, Occiput, Scalp, Temple, Adam\'s apple, Throat, Nape', selected: false },
        { type: 'Arm', description: 'Shoulder, Axilla, Brachium, Elbow, Forearm, Wrist Hand, Finger: Thumb, Index, Middle, Ring, Little', selected: false },
        { type: 'Torso', description: 'Abdomen, Waist, Midriff, Navel, Back, Thorax, Breast, Pelvis, Sex organs', selected: false },
        { type: 'Leg', description: 'Buttocks, Hip, Thigh, Knee, Calf, Foot: Ankle, Heel, Toe, Sole', selected: false }
    ];

    public objectiveOptions: Options = {
        floor: -4,
        ceil: 4,
        vertical: true,
        // showSelectionBar: false,
        showTicksValues: true,
    }

    public objectiveValues: any[] = [
        {name:'AGGRESSIVE', value: 4, colorClass: 'red'},
        {name: 'MODERALITY AGGRESSIVE', value: 3, colorClass: 'orange'},
        {name: 'MODERATE', value: 2, colorClass: 'light-orange'},
        {name: 'CONSERVATIVE', value: 1, colorClass: 'light-green'},
        {name: 'MINIMAL', value: 0, colorClass: 'green'},
        {name: 'CONSERVATIVE', value: -1, colorClass: 'light-green'},
        {name: 'MODERATE', value: -2, colorClass: 'light-orange'},
        {name: 'MODERALITY AGGRESSIVE', value: -3, colorClass: 'orange'},
        {name: 'AGGRESSIVE', value: -4, colorClass: 'red'}
    ]

    public frequencyOptions: Options = {
        floor: 1,
        ceil: 6
    }

    public frequency: any = {
        days: 1,
        sessions: 1
    }
    public frequencyTypes: any[] = [
        { type: 'Day 1', selected: true, multipleDays: false, sessions: 1 },
        { type: 'Day 2', selected: false, multipleDays: false, sessions: 1 },
        { type: 'Day 3', selected: false, multipleDays: false, sessions: 1 },
        { type: 'Day 4', selected: false, multipleDays: false, sessions: 1 },
        { type: 'Day 5', selected: false, multipleDays: false, sessions: 1 },
        { type: 'Day 6', selected: false, multipleDays: false, sessions: 1 }
    ]


    public levelTypes: any[] = [
        { description: 'Novice, little to no exercise experience, less than 1 yr', shortDec: 'Beginner', selected: true },
        { description: 'Proficient & skilled in exercise practices, 2-4 yrs experience', shortDec: 'Intermediate', selected: false },
        { description: 'Seasoned, well-skilled in exercise practices, +5 yrs experience', shortDec: 'Advance', selected: false }
    ]

    public goalTypes: any[] = [
        { type: 'Calves', muscularity: false, strength: false, imgSrc: 'muscles-19.jpg' },
        { type: 'Quadriceps', muscularity: false, strength: false, imgSrc: 'QuadricepsHighlight.png' },
        { type: 'Hamstrings', muscularity: false, strength: false, imgSrc: 'HamstringsHighlight.png' },
        { type: 'Back', muscularity: false, strength: false, imgSrc: 'FullBackHighlight.png' },
        { type: 'Trapezius', muscularity: false, strength: false, imgSrc: 'TrapeziusHighlight.png' },
        { type: 'Chest', muscularity: false, strength: false, imgSrc: 'FullChestHighlight.png' },
        { type: 'Deltoids', muscularity: false, strength: false, imgSrc: 'FrontDeltHighlight.png' },
        { type: 'Triceps', muscularity: false, strength: false, imgSrc: 'TricepHighlight.png' },
        { type: 'Biceps', muscularity: false, strength: false, imgSrc: 'BicepHighlight.png' },
        { type: 'Forearms', muscularity: false, strength: false, imgSrc: 'ForearmHighlight.png' },
        { type: 'Glutes', muscularity: false, strength: false, imgSrc: 'GlutesHighlight.png' },
        { type: 'Abductors', muscularity: false, strength: false, imgSrc: 'AbductorsHighlight.png' },
        { type: 'Adductors', muscularity: false, strength: false, imgSrc: 'AdductorsHighlight.png' }
    ]

    public mucleWeakneses: boolean = false;

    public mucleOptions: Options = {
        floor: 1,
        ceil: 1
    }

    public muscleTypes: any[] = [
        {
            type: 'Deltoids', description: 'Front Delts, Side Delts, Rear Delts', selected: false,
            subitems: [
                { subtype: 'Front Delts', sessions: 0, imgSrc: 'FrontDeltHighlight.png' },
                { subtype: 'Side Delts', sessions: 0, imgSrc: 'SideDeltHighlight.png' },
                { subtype: 'Rear Delts', sessions: 0, imgSrc: 'RearDeltHighlight.png' }
            ]
        },
        {
            type: 'Chest', description: 'Upper, Lower', selected: false,
            subitems: [
                { subtype: 'Upper', sessions: 0, imgSrc: 'UpperChestHighlight.png' },
                { subtype: 'Lower', sessions: 0, imgSrc: 'LowerChestHighlight.png' }
            ]
        },
        {
            type: 'Back', description: 'Trapezius, Middle Back, Lats, Lower Back', selected: false,
            subitems: [
                { subtype: 'Trapezius', sessions: 0, imgSrc: 'TrapeziusHighlight.png' },
                { subtype: 'Middle Back', sessions: 0, imgSrc: 'MiddleBackHighlight.png' },
                { subtype: 'Lats', sessions: 0, imgSrc: '' },
                { subtype: 'Lower Back', sessions: 0, imgSrc: 'LowerBackHighlight.png' }
            ]
        },
        {
            type: 'Arm', description: 'Triceps, Biceps, Forearms', selected: false,
            subitems: [
                { subtype: 'Triceps', sessions: 0, imgSrc: 'TricepHighlight.png' },
                { subtype: 'Biceps', sessions: 0, imgSrc: 'BicepHighlight.png' },
                { subtype: 'Forearms', sessions: 0, imgSrc: 'ForearmHighlight.png' }
            ]
        },
        {
            type: 'Core', description: 'Abdominals, Obliques', selected: false,
            subitems: [
                { subtype: 'Abdominals', sessions: 0, imgSrc: 'AbdominalsHighlight.png' },
                { subtype: 'Obliques', sessions: 0, imgSrc: 'ObliquesHighlight.png' }
            ]
        },
        {
            type: 'Leg', description: 'Glutes, Hamstrings, Abductors, Quadriceps, Adductors, Calves', selected: false,
            subitems: [
                { subtype: 'Glutes', sessions: 0, imgSrc: 'GlutesHighlight.png' },
                { subtype: 'Hamstrings', sessions: 0, imgSrc: 'HamstringsHighlight.png' },
                { subtype: 'Abductors', sessions: 0, imgSrc: 'AbductorsHighlight.png' },
                { subtype: 'Quadriceps', sessions: 0, imgSrc: 'QuadricepsHighlight.png' },
                { subtype: 'Adductors', sessions: 0, imgSrc: 'AdductorsHighlight.png' },
                { subtype: 'Calves', sessions: 0, imgSrc: '' }
            ]
        }
    ]

    public trainingTypes: any[] = [
        { type: 'Barbell', selected: false, readOnly: false },
        { type: 'Dumbbell', selected: false, readOnly: false },
        { type: 'Kettlebell', selected: false, readOnly: false },
        { type: 'Cable', selected: false, readOnly: false },
        { type: 'Machine', selected: false, readOnly: false },
        { type: 'Bands', selected: false, readOnly: false },
        { type: 'Bodyweight', selected: true, readOnly: true }
    ]

    public mealOptions: Options = {
        floor: 0,
        ceil: 8
    }

    public macroTypes: any[] = [
        { type: 'Moderate', selected: true, imgSrc: 'assets/img/foods/moderate_diet.jpg' },
        { type: 'Moderate II', selected: false, imgSrc: 'assets/img/foods/moderate_II_diet.jpeg' },
        { type: 'Ketogenic', selected: false, imgSrc: 'assets/img/foods/ketogenic_diet.jpg' },
        { type: 'Low Fat', selected: false, imgSrc: 'assets/img/foods/low_fat_diet.jpeg' },
        { type: 'Anabolic', selected: false, imgSrc: 'assets/img/foods/anabolic_diet.png' },
        { type: 'Low Carb', selected: false, imgSrc: 'assets/img/foods/low_carb_diet.jpeg' },
        { type: 'Zone', selected: false, imgSrc: 'assets/img/foods/zone_diet.jpg' },
        { type: '5 Day Diet', selected: false, imgSrc: 'assets/img/foods/5_day_diet.jpg' }
    ]

    public profileSection: boolean = true;
    public trainingSection: boolean = false;
    public nutritionSection: boolean = false;
    public confirmSection: boolean = false;

    public images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

    public custInfoForm: FormGroup;

    constructor(
        private httpClient: HttpClient,
        private config: NgbCarouselConfig) {
        config.interval = 10000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = true;
    }

    ngOnInit() {
        this.setupForm();
    }

    public onGenderToggle(gender: boolean) {
        this.profile.gender = gender;
    }

    public onPhysicalSetBackToggle(hasSetback: boolean) {
        this.profile.physicalSetback = hasSetback;
    }

    public setupForm() {
        this.custInfoForm = new FormGroup({
            firstName: new FormControl(''),
            lastName: new FormControl(''),
            email: new FormControl('', [
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\\.[a-zA-Z]{2,15}$')
            ]),
            terms: new FormControl(false, Validators.requiredTrue),
        });
    }

    public isFormInvalid(field: string) {
        return (this.custInfoForm.get(field).invalid && this.custInfoForm.get(field).touched);
    }

    public onSelect(index: number, type: string) {
        switch (type) {
            case 'TYPE':
                const body = this.bodyTypes.find((body) => (body.selected));
                body.selected = false;

                this.profile.bodyType = this.bodyTypes[index].type;
                this.bodyTypes[index].selected = true;
                break;
            case 'ACTIVITY':
                const activity = this.activityTypes.find((type) => (type.selected));
                activity.selected = false;

                this.profile.activityLevel = this.activityTypes[index].type;
                this.activityTypes[index].selected = true;
                break;
            case 'SETBACK':
                this.setbackTypes[index].selected = !this.setbackTypes[index].selected
                break;
            case 'LEVEL':
                const level = this.levelTypes.find((type) => (type.selected));
                level.selected = false;

                this.levelTypes[index].selected = true;
                break;
            case 'GOAL_M':
                this.goalTypes[index].muscularity = !this.goalTypes[index].muscularity;
                break;
            case 'GOAL_S':
                this.goalTypes[index].strength = !this.goalTypes[index].strength
                break;
            case 'MUSCLE':
                this.muscleTypes[index].selected = !this.muscleTypes[index].selected
                break;
            case 'FREQUENCY':
                const freq = this.frequencyTypes[index].multipleDays
                this.frequencyTypes[index].multipleDays = !freq
                this.frequencyTypes[index].sessions = !freq ? 2 : 1;

                let tempAmount = 0;
                for (let i = 0; i < this.frequencyTypes.length; i++) {
                    if (this.frequencyTypes[i].selected) {
                        tempAmount += this.frequencyTypes[i].sessions
                    }
                }

                this.frequency.sessions = tempAmount;
                this.mucleOptions.ceil = tempAmount;
                this.mucleOptions = { ...this.mucleOptions };
                break;
            case 'TRAINING':
                this.trainingTypes[index].selected = this.trainingTypes[index].readOnly ? true : !this.trainingTypes[index].selected;
                break;
            case 'MACRO':
                const macro = this.macroTypes.find((type) => (type.selected));
                macro.selected = false;

                this.profile.macroType = this.macroTypes[index].type;
                this.macroTypes[index].selected = true;
                break;
            default:
        }
    }

    public handleUserChange(type: string) {
        switch (type) {
            case 'FREQUENCY':
                this.frequencyTypes.forEach((type) => {
                    type.selected = false;
                    // type.multipleDays = false;
                })
                let tempAmount = 0;
                for (let i = 0; i < this.frequency.days; i++) {
                    this.frequencyTypes[i].selected = true;
                    if (this.frequencyTypes[i].selected) {
                        tempAmount += this.frequencyTypes[i].sessions
                    }
                }

                this.frequency.sessions = tempAmount;
                this.mucleOptions.ceil = tempAmount;
                this.mucleOptions = { ...this.mucleOptions };

                break;
            default:
        }
    }

    public onToggled() {
        this.mucleWeakneses = !this.mucleWeakneses;
    }

    public submitEmail() {
        let url = `https://us-central1-flobro-demo.cloudfunctions.net/emailMessage`
        let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

        const body = this.createEmailBody();

        this.httpClient.post(url, body, { headers })
            .toPromise()
            .then((res) => {
                window.location.href = "http://flobrofitness.com/";
                console.log('Successfully submitted');
            }).catch((err) => {
                console.log(err);
            })
    }

    public createEmailBody() {
        return {
            customerProfile: {
                name: this.custInfoForm.get('firstName').value,
                lastName: this.custInfoForm.get('lastName').value,
                email: this.custInfoForm.get('email').value
            },
            bodyProfile: this.profile.getBodyProfile,
            training: {
                skill: this.getSkill,
                calves: this.getGoalTypeByIndex(0),
                quadriceps: this.getGoalTypeByIndex(1),
                hamstring: this.getGoalTypeByIndex(2),
                back: this.getGoalTypeByIndex(3),
                trapezius: this.getGoalTypeByIndex(4),
                chest: this.getGoalTypeByIndex(5),
                deltoids: this.getGoalTypeByIndex(6),
                triceps: this.getGoalTypeByIndex(7),
                biceps: this.getGoalTypeByIndex(8),
                forearms: this.getGoalTypeByIndex(9),
                glutes: this.getGoalTypeByIndex(10),
                abductors: this.getGoalTypeByIndex(11),
                adductors: this.getGoalTypeByIndex(12),
                days: this.getDaysFrequency(),
                problematicAreas: this.getProblematicAreas(),
                trainingStyles: this.trainingTypes.filter((t) => (t.selected)).map((t) => ({ name: t.type }))
            },
            nutrition: this.profile.getNutrition
        };
    }

    public get getSkill(): string {
        const level = this.levelTypes.find((l) => (l.selected));
        return level.shortDec
    }

    public getGoalTypeByIndex(index: number) {
        let goal = this.goalTypes[index].muscularity ? 'Shape/Tone' : 'Build Mass';
        goal = goal + ' & Increase ' + (this.goalTypes[index].strength ? 'Endurance' : 'Strength');
        return goal;
    }

    public getProblematicAreas() {
        let value = [];
        const areas = this.muscleTypes.filter((t) => (t.selected))
        areas.forEach((a) => {
            a.subitems.forEach((s) => {
                value.push({
                    name: s.subtype + ' ' + a.type,
                    value: s.sessions
                });
            });
        });
        return value;
    }

    public getDaysFrequency() {
        return this.frequencyTypes.filter((f) => (f.selected)).map((f) => ({
            name: f.type,
            value: f.sessions + ' Sessions'
        }));
    }

    public profileSectionComplete() {
        this.trainingSection = true;

        setTimeout(() => {
            document.getElementById('trainingSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 1000);
    }

    public trainingSectionComplete() {
        this.nutritionSection = true;

        setTimeout(() => {
            document.getElementById('nutritionSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 1000);
    }

    public nutritionSectionComplete() {
        this.confirmSection = true;

        setTimeout(() => {
            document.getElementById('confirmSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 1000);
    }



    // getter

    public get getBodyTypeString() {
        const body = this.bodyTypes.find((body) => (body.selected));
        return body.type;
    }

    public get getActivityTypeString() {
        const body = this.activityTypes.find((body) => (body.selected));
        return body.type;
    }

    public get getTraningStylesString() {
        return this.trainingTypes.filter((t) => (t.selected)).map((t) => (t.type)).join(', ');
    }

    public get getMucleWeaknesesString() {
        return this.mucleWeakneses ? 'Do' : 'Do Not';
    }

    public get getPhysicalObjectiveRecommendation(): string {
        if (this.profile.gender) {
            if (this.profile.fatPercentage < 4) {
                return 'Maintain, +1lbs/week, +2lbs/week, +3lbs/week, +4lbs/week';
            } else if (this.profile.fatPercentage < 8) {
                return '-1lbs/week, Maintain, +1lbs/week, +2lbs/week, +3lbs/week, +4lbs/week';
            } else if (this.profile.fatPercentage === 8) {
                return '-2lbs/week, -1lbs/week, Maintain, +1lbs/week, +2lbs/week, +3lbs/week, +4lbs/week';
            } else if (this.profile.fatPercentage < 13) {
                return '-2lbs/week, -1lbs/week, Maintain, +1lbs/week, +2lbs/week, +3lbs/week';
            } else if (this.profile.fatPercentage < 15) {
                return '-2lbs/week, -1lbs/week, Maintain, +1lbs/week, +2lbs/week';
            } else if (this.profile.fatPercentage < 17) {
                return '-3lbs/week, -2lbs/week, -1lbs/week, Maintain, +1lbs/week, +2lbs/week';
            } else if (this.profile.fatPercentage < 19) {
                return '-3lbs/week, -2lbs/week, -1lbs/week, Maintain, +1lbs/week';
            } else {
                return '-4lbs/week, -3lbs/week, -2lbs/week, -1lbs/week';
            }
        } else {
            if (this.profile.fatPercentage < 6) {
                return '+1lbs/week, +2lbs/week, +3lbs/week, +4lbs/week';
            } else if (this.profile.fatPercentage < 10) {
                return 'Maintain, +1lbs/week, +2lbs/week, +3lbs/week, +4lbs/week';
            } else if (this.profile.fatPercentage === 10) {
                return '-1lbs/week, Maintain, +1lbs/week, +2lbs/week, +3lbs/week, +4lbs/week';
            } else if (this.profile.fatPercentage < 14) {
                return '-1lbs/week, Maintain, +1lbs/week, +2lbs/week, +3lbs/week';
            } else if (this.profile.fatPercentage < 19) {
                return '-2lbs/week, -1lbs/week, Maintain, +1lbs/week, +2lbs/week, +3lbs/week';
            } else if (this.profile.fatPercentage === 19) {
                return '-2lbs/week, -1lbs/week, Maintain, +1lbs/week, +2lbs/week';
            } else if (this.profile.fatPercentage < 22) {
                return '-3lbs/week, -2lbs/week, -1lbs/week, Maintain, +1lbs/week, +2lbs/week';
            } else if (this.profile.fatPercentage < 25) {
                return '-3lbs/week, -2lbs/week, -1lbs/week, Maintain, +1lbs/week';
            } else {
                return '-4lbs/week, -3lbs/week, -2lbs/week, -1lbs/week';
            }
        }
    }

    public get getTrainingFrequencyRecommendation(): string {
        switch(this.profile.objectives) {
            case -4:
            case 4:
                return '+5 Days';
            case -3:
            case 3:
                return '+4 Days';
            case -2:
            case 2:
                return '+3 Days';
            case -1:
            case 1:
                return '+2 Days';
            case 0:
                return '+1 Day';
        }
    }

    public get getEatingScheduleRecommendation(): string {
        switch(this.profile.objectives) {
            case 4:
                return '+5 Meals';
            case -4:
            case 3:
                return '+4 Meals';
            case -3:
            case 2:
                return '+3 Meals';
            case -2:
            case -1:
            case 1:
            case 0:
                return '+2 Meals';
        }
    }
}
