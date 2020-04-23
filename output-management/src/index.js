import _ from 'lodash';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack', '안녕하세요!!'], ' ');
    return element;
}

document.body.appendChild(component());