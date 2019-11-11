import { Component } from '@angular/core';
import { Options } from 'ng5-slider';
import {Profile} from './model/profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
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
    ceil: 39
  }

  public bodyTypes:any[] = [
    {type: 'ectomorph', selected: true },
    {type: 'endomorph', selected: false },
    {type: 'mesomorph', selected: false }
  ];


  public activityTypes: any[] = [
    {type: 'Sedantary', description: 'Little to no exercise/ desk job', selected: true },
    {type: 'Lightly Active', description: 'Light exercise: sports 1-3 days per week/ server, nurse', selected: false },
    {type: 'Moderately Active', description: 'Moderate exercise: sports 3-5 days per week/ usher, host', selected: false },
    {type: 'Very Active', description: 'Heavy exercise: sports 6-7 days per week/ mostly physical: farmer, construction', selected: false },
    {type: 'Extremely Active', description: 'Very heavy exercise: sports, training 2x/day, mostly physical: farmer, construction', selected: false },
  ];

  public sleepTimeOptions: Options = {
    floor: 2,
    ceil: 16
  }

  public setbackTypes: any[] = [
    {type: 'Head & Neck ', description: 'Head & Neck  Face, Forehead, Cheek, Chin, Eye, Nose, Mouth, Lips, Ear, Jaw, Mandible, Occiput, Scalp, Temple, Adam\'s apple, Throat, Nape', selected: false },
    {type: 'Arm', description: 'Shoulder, Axilla, Brachium, Elbow, Forearm, Wrist Hand, Finger: Thumb, Index, Middle, Ring, Little', selected: false },
    {type: 'Torso', description: 'Abdomen, Waist, Midriff, Navel, Back, Thorax, Breast, Pelvis, Sex organs', selected: false },
    {type: 'Leg', description: 'Buttocks, Hip, Thigh, Knee, Calf, Foot: Ankle, Heel, Toe, Sole', selected: false }
  ];

  public objectiveOptions: Options = {
    floor: -3,
    ceil: 3,
    vertical: true
  }

  public levelTypes: any[] = [
    {type: 'Beginner Novice, little to no exercise experience, less than 1 yr', selected: true},
    {type: 'Intermediate Proficient & skilled in exercise practices, 2-4 yrs experience', selected: false},
    {type: 'Advance Seasoned, well-skilled in exercise practices, +5 yrs experience', selected: false}
  ]

  public trainingTypes: any[] = [
    {type: 'Barbell', selected: false, readOnly: false},
    {type: 'Dumbbell', selected: false, readOnly: false},
    {type: 'Kettlebell', selected: false, readOnly: false},
    {type: 'Cable', selected: false, readOnly: false},
    {type: 'Machine', selected: false, readOnly: false},
    {type: 'Bands', selected: false, readOnly: false},
    {type: 'Bodyweight', selected: true, readOnly: true}
  ]

  public mealOptions: Options = {
    floor: 0,
    ceil: 6
  }

  public macroTypes: any[] = [
    {type: 'Moderate', selected: true},
    {type: 'Moderate II', selected: false},
    {type: 'Ketogenic', selected: false},
    {type: 'Low Fat', selected: false},
    {type: 'Anabolic', selected: false},
    {type: 'Low Carb', selected: false},
    {type: 'Zone', selected: false},
    {type: '5 Day Diet', selected: false}
  ]

  constructor() {

  }

  public onGenderToggle(gender: boolean) {
    this.profile.gender = gender;
  }


  public onPhysicalSetBackToggle(hasSetback: boolean) {
    this.profile.physicalSetback = hasSetback;
  }




  public onSelect(index: number, type: string) {
    switch(type) {
      case 'TYPE':
          const body = this.bodyTypes.find((body) => (body.selected));
          body.selected = false;
      
          this.bodyTypes[index].selected = true;
        break;
      case 'ACTIVITY':
          const activity = this.activityTypes.find((type) => (type.selected));
          activity.selected = false;
      
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
      case 'TRAINING':
          this.trainingTypes[index].selected = this.trainingTypes[index].readOnly ? true : !this.trainingTypes[index].selected;
        break;
      case 'MACRO':
          const macro = this.macroTypes.find((type) => (type.selected));
          macro.selected = false;
      
          this.macroTypes[index].selected = true;
          break;
        default:
    }
  }

  public onToggled(event: boolean) {
    this.capi = event;
  }
}
