import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'ui-check',
    templateUrl: './ui.check.component.html',
    styleUrls: ['./ui.check.component.sass']
})
export class UiCheckComponent {

    @Input() public inputId: string;
    @Input() public theFormGroup: FormGroup;
    @Input() public placeHolderText: string;
    @Input() public disabledFlag: boolean;
    @Input() public additionalClasses: string;
    @Input() public borderClasses: string;

    @Output() public change: EventEmitter<boolean> = new EventEmitter();

    constructor() {
        this.placeHolderText = this.placeHolderText || '';
        this.disabledFlag = this.disabledFlag || false;
        this.additionalClasses = this.additionalClasses || '';
        this.borderClasses = this.borderClasses || '';
    }
}
