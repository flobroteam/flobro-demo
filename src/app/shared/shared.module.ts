import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ToggleButtonComponent} from './components/toggle.button/toggle.button.component';
import {UiInputComponent} from './components/ui.input/ui.input.component';
import {UiFieldErrorComponent} from './components/ui.field.error/ui.field.error.component';

@NgModule({
  declarations: [
    ToggleButtonComponent,
    UiInputComponent,
    UiFieldErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ToggleButtonComponent,
    UiInputComponent,
    UiFieldErrorComponent
  ],
  providers: [],
  entryComponents: [
  ]
})
export class SharedModule {}