'use strict';

document.getElementById('hider').onclick = function toggle() {
    let el = document.getElementById('hide');
    el.style.height = (el.style.height === '0px') ? el.children[0].offsetHeight + 'px' : '0px';
};
                          
