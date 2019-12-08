import { Component, OnInit, AfterViewInit, HostBinding, Input } from '@angular/core';
import { fromEvent, Observable, } from 'rxjs';
import {
    throttleTime,
    map,
    pairwise,
    distinctUntilChanged,
    filter
} from 'rxjs/operators';
import {
    animate,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';

export const enum VisibilityState {
    Visible = 'visible',
    Hidden = 'hidden'
}

export const enum Direction {
    Up = 'Up',
    Down = 'Down'
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass'],
    animations: [
        trigger('toggle', [
            state(
                VisibilityState.Hidden,
                style({ opacity: 0, transform: 'translateY(-100%)' })
            ),
            state(
                VisibilityState.Visible,
                style({ opacity: 1, transform: 'translateY(0)' })
            ),
            transition('* => *', animate('200ms ease-in'))
        ])
    ]
})
export class HeaderComponent implements OnInit, AfterViewInit {
    public isVisible = true;

    @Input() public profileSection: boolean;
    @Input() public trainingSection: boolean;
    @Input() public nutritionSection: boolean;
    @Input() public confirmSection: boolean;

    @Input() public formValid: boolean;

    constructor() { }

    ngOnInit() {
    }

    @HostBinding('@toggle')
    public get toggle(): VisibilityState {
        return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
    }

    ngAfterViewInit() {
        const scroll = fromEvent(window, 'scroll').pipe(
            throttleTime(10),
            map(() => window.pageYOffset),
            pairwise(),
            map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
            distinctUntilChanged(),
        );

        const scrollUp = scroll.pipe(
            filter(direction => direction === Direction.Up)
        );

        const scrollDown = scroll.pipe(
            filter(direction => direction === Direction.Down)
        );

        scrollUp.subscribe(() => (this.isVisible = true));
        scrollDown.subscribe(() => (this.isVisible = false));
    }

    public handleOnClick(place: string) {
        switch (place) {
            case 'P':
                document.getElementById('profileSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case 'T':
                document.getElementById('trainingSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case 'N':
                document.getElementById('nutritionSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case 'C':
                document.getElementById('confirmSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
                break
            default:
        }
    }

    public get getPercentage(): number {
        let value = 0;
        // if (this.profileSection) {
        //     value += 25;
        // }

        if (this.trainingSection) {
            value += 25;
        }

        if (this.nutritionSection) {
            value += 25;
        }

        if (this.confirmSection) {
            value += 25;
        }

        if (this.formValid) {
            value += 25;
        }

        return value
    }

}
