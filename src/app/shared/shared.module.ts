import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ToggleButtonComponent} from './components/toggle.button/toggle.button.component';

@NgModule({
  declarations: [
    ToggleButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToggleButtonComponent
  ],
  providers: [],
  entryComponents: [
  ]
})
export class SharedModule {}