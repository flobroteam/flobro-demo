import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'ui-input',
    templateUrl: './ui.input.component.html',
    styleUrls: ['./ui.input.component.sass']
})

/**
 * @class InputComponent
 * @classdesc handles the functionality of ui inputs fields.
 */
export class UiInputComponent implements OnInit {

    @Input() public placeHolderText: string;
    @Input() public inputId: string;
    @Input() public inputValue: string;
    @Input() public maxLength: number;
    @Input() public minLength: number;
    @Input() public additionalClasses: string;
    @Input() public inputType: string;
    @Input() public disabledFlag: boolean;
    @Input() public placeHolder: any;
    @Input() public theFormGroup: FormGroup;
    @Input() public maxAmount: number;
    @Input() public autofocus: boolean;
    @Input() public noSpecialCharacters: boolean;
    @Input() public noSpecialCharactersSpacesAllowed: boolean;

    @Output() public inputClearClicked: EventEmitter<boolean> = new EventEmitter();

    /**
     * @description initializes the values for this component when this lifecycle event occurs.
     * @function ngOnInit
     * @memberof UiInputComponent
     */
    public ngOnInit() {
        this.placeHolderText = this.placeHolderText || '';
        this.placeHolder = this.placeHolder || '';
        this.inputId = this.inputId || '';
        this.additionalClasses = this.additionalClasses || '';
        this.disabledFlag = this.disabledFlag || false;
        this.maxLength = this.maxLength || 50;
        this.minLength = this.minLength || 0;
        this.autofocus = this.autofocus || false;
        this.noSpecialCharacters = this.noSpecialCharacters || false;
        this.noSpecialCharactersSpacesAllowed = this.noSpecialCharactersSpacesAllowed || false;
        this.updateMinAndMaxLengths(false);       
    }

    public clearInput() {
        this.theFormGroup.get(this.inputId).setValue('');
        this.inputClearClicked.emit(true);
    }

    /**
     * @description sets the values of min and max lengths.
     * @function updateMinAndMaxLengths
     * @memberof UiInputComponent
     */
    public updateMinAndMaxLengths(focused: boolean) {
        if (this.inputType === 'phone') {
            this.maxLength = 10;
            this.minLength = this.minLength || 10;
        }
    }
}
