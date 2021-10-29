import { LightningElement } from 'lwc';

export default class TaskOneLwcComponent extends LightningElement {
    valueInput = '';
    valueTemplate = '';

    getValueInput(event) {
        this.valueInput = event.target.value;
    }

    showInfoFromInput() {
        this.valueTemplate = this.valueInput;
    }
}