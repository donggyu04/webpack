import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack', '안녕하세요!!'], ' ');
    element.classList.add('hello');

    const icon = new Image();
    icon.src = Icon;
    icon.height = 100;
    icon.width = 100;

    element.appendChild(icon);
    return element;
}

const div = document.createElement('div');
div.innerHTML = '안녕하세요!!';

document.body.appendChild(component());
document.body.appendChild(div);