'use strict';

function ChangeHTMLHeight () {
    //this js code needs to be replaced on css or html or anything for browsers without js
    if (document.documentElement.clientHeight < document.documentElement.scrollHeight) {document.getElementsByTagName("html")[0].style.height = "auto"; }
}

document.getElementById('hider').onclick = function toggle() {
    var el = document.getElementById('hide');
    el.style.display = (el.style.display === 'none') ? '' : 'none';
    ChangeHTMLHeight();
};


document.addEventListener("DOMContentLoaded", ChangeHTMLHeight());
                          
