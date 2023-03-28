const counterList = document.querySelector('#counter-list');
const newCounterButton = document.querySelector('#new-counter');
const counters: Counter[] = [];

class Counter {
    labelString: string;
    count: number;
    sub: number;
    add: number;
    counterDiv: HTMLDivElement;
    labelTextarea: HTMLTextAreaElement;
    body: HTMLDivElement;
    subController: HTMLDivElement;
    subButton: HTMLButtonElement;
    subSettingsButton: HTMLButtonElement;
    countSpan: HTMLSpanElement;
    addController: HTMLDivElement;
    addButton: HTMLButtonElement;
    addSettingsButton: HTMLButtonElement;

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
        this.subSettingsButton = document.createElement('button');
        this.countSpan = document.createElement('span');
        this.addController = document.createElement('div');
        this.addButton = document.createElement('button');
        this.addSettingsButton = document.createElement('button');

        this.counterDiv.classList.add('counter');
        this.labelTextarea.classList.add('counter-label');
        this.body.classList.add('counter-body');
        this.subController.classList.add('controller');
        this.subButton.classList.add('controller-count', 'controller-sub');
        this.subSettingsButton.classList.add('controller-settings');
        this.countSpan.classList.add('counter-display');
        this.addController.classList.add('controller');
        this.addButton.classList.add('controller-count', 'controller-add');
        this.addSettingsButton.classList.add('controller-settings');

        this.labelTextarea.placeholder = "Counter"

        this.subSettingsButton.innerHTML = '&#9881;';
        this.addSettingsButton.innerHTML = '&#9881;';

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
        })

        this.addButton.addEventListener('click', () => {
            this.count += this.sub;
            this.updateValues();
        })

        this.updateValues();
    }
}

newCounterButton!.addEventListener('click', () => {
    counters.push(new Counter());
    counterList?.appendChild(counters[counters.length - 1].counterDiv);
})
