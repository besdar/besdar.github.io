'use strict';

document.getElementById('hider').onclick = function toggle() {
    let el = document.getElementById('hide');
    el.style.height = (el.style.height === '0px') ? '32px' : '0px';
};
                          
