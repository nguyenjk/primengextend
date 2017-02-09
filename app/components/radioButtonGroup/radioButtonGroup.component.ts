import {Component, Input, Output, EventEmitter} from '@angular/core';  

@Component({
	templateUrl: 'app/components/radioButtonGroup/radioButtonGroup.component.html',
    selector: 'radio-button-group'
})

export class RadioButtonGroupComponent {
    @Input()
	items: boolean;

    @Input()
    header: string;

    @Input()
    checkedValue: string

    @Output() selectedValue = new EventEmitter();

    group: string;

    constructor() {
        this.group = "group" + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        this.selectedValue.emit(this.checkedValue);
    }
}
