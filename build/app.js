var counterList = document.querySelector('#counter-list');
var newCounterButton = document.querySelector('#new-counter');
var counters = [];
var Counter = /** @class */ (function () {
    function Counter() {
        this.labelString = "Counter";
        this.sub = 1;
        this.add = 1;
        this.count = 0;
        this.counterDiv = document.createElement('div');
        this.labelSpan = document.createElement('span');
        this.body = document.createElement('div');
        this.subController = document.createElement('div');
        this.subButton = document.createElement('button');
        this.subSettingsButton = document.createElement('button');
        this.countSpan = document.createElement('span');
        this.addController = document.createElement('div');
        this.addButton = document.createElement('button');
        this.addSettingsButton = document.createElement('button');
        this.counterDiv.classList.add('counter');
        this.labelSpan.classList.add('counter-label');
        this.body.classList.add('counter-body');
        this.subController.classList.add('controller');
        this.subButton.classList.add('controller-count', 'controller-sub');
        this.subSettingsButton.classList.add('controller-settings');
        this.countSpan.classList.add('counter-display');
        this.addController.classList.add('controller');
        this.addButton.classList.add('controller-count', 'controller-add');
        this.addSettingsButton.classList.add('controller-settings');
        this.subSettingsButton.innerText = 'Change';
        this.addSettingsButton.innerText = 'Change';
        this.subController.appendChild(this.subButton);
        this.subController.appendChild(this.subSettingsButton);
        this.addController.appendChild(this.addButton);
        this.addController.appendChild(this.addSettingsButton);
        this.body.appendChild(this.subController);
        this.body.appendChild(this.countSpan);
        this.body.appendChild(this.addController);
        this.counterDiv.appendChild(this.labelSpan);
        this.counterDiv.appendChild(this.body);
        this.updateValues();
    }
    Counter.prototype.updateValues = function () {
        this.labelSpan.innerText = this.labelString;
        this.subButton.innerText = "- ".concat(this.sub);
        this.addButton.innerText = "+ ".concat(this.add);
        this.countSpan.innerText = this.count.toString();
    };
    return Counter;
}());
newCounterButton.addEventListener('click', function () {
    counters.push(new Counter());
    counterList === null || counterList === void 0 ? void 0 : counterList.appendChild(counters[counters.length - 1].counterDiv);
});
