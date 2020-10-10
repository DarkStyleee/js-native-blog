import {Component} from '../core/component';

const section = document.querySelector('.js-container');

export class HeaderComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        if (localStorage.getItem('visited')){
            this.hide();
            section.classList.remove('hide');
        } else {
            section.classList.add('hide');
        }
        const btn = this.$el.querySelector('.js-header-start');
        btn.addEventListener('click', buttonHandler.bind(this));
    }
}

function buttonHandler() {
    localStorage.setItem('visited', JSON.stringify(true));
    this.hide();
    section.classList.remove('hide');
}