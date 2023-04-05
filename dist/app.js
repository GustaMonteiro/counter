"use strict";
const counterList = document.querySelector('#counter-list');
const newCounterButton = document.querySelector('#new-counter');
const counters = [];
class Counter {
    updateValues() {
        this.labelTextarea.innerText = this.labelString;
        this.subButton.innerText = `- ${this.sub}`;
        this.addButton.innerText = `+ ${this.add}`;
        this.countSpan.innerText = this.count.toString();
    }
    constructor() {
        this.labelString = "";
        this.sub = 1;
        this.add = 1;
        this.count = 0;
        this.counterDiv = document.createElement('div');
        this.labelTextarea = document.createElement('textarea');
        this.body = document.createElement('div');
        this.subController = document.createElement('div');
        this.subButton = document.createElement('button');
        this.subSettingsButton = document.createElement('img');
        this.countSpan = document.createElement('span');
        this.addController = document.createElement('div');
        this.addButton = document.createElement('button');
        this.addSettingsButton = document.createElement('img');
        this.counterDiv.classList.add('counter');
        this.labelTextarea.classList.add('counter-label');
        this.body.classList.add('counter-body');
        this.subController.classList.add('controller');
        this.subButton.classList.add('controller-count', 'controller-sub');
        this.subSettingsButton.classList.add('gear-icon');
        this.countSpan.classList.add('counter-display');
        this.addController.classList.add('controller');
        this.addButton.classList.add('controller-count', 'controller-add');
        this.addSettingsButton.classList.add('gear-icon');
        this.labelTextarea.placeholder = "Counter";
        this.subSettingsButton.src = 'dist/icons/gear.svg';
        this.addSettingsButton.src = 'dist/icons/gear.svg';
        this.subController.appendChild(this.subButton);
        this.subController.appendChild(this.subSettingsButton);
        this.addController.appendChild(this.addButton);
        this.addController.appendChild(this.addSettingsButton);
        this.body.appendChild(this.subController);
        this.body.appendChild(this.countSpan);
        this.body.appendChild(this.addController);
        this.counterDiv.appendChild(this.labelTextarea);
        this.counterDiv.appendChild(this.body);
        this.subButton.addEventListener('click', () => {
            this.count -= this.sub;
            this.updateValues();
        });
        this.addButton.addEventListener('click', () => {
            this.count += this.add;
            this.updateValues();
        });
        this.updateValues();
    }
}
const createNewCounter = () => {
    counters.push(new Counter());
    counterList.appendChild(counters[counters.length - 1].counterDiv);
};
newCounterButton.addEventListener('click', createNewCounter);
createNewCounter();
