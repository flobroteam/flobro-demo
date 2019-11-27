import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'toggle-button',
    templateUrl: './toggle.button.component.html',
    styleUrls: ['./toggle.button.component.sass']
})
export class ToggleButtonComponent {
    @Input() on: boolean;
    @Input() className: string;
    @Output() toggled: EventEmitter<boolean> = new EventEmitter();

    onClick() {
        this.on = !this.on;
        this.toggled.emit(this.on);
    }
}
