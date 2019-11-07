import { Component } from '@angular/core';
import { Options } from 'ng5-slider';

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


  public onToggled(event: boolean) {
    this.capi = event;
  }
}
