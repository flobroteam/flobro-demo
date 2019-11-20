import { Component, OnInit, AfterViewInit, HostBinding } from '@angular/core';
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

}
