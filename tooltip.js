'use strict';

const tipTexts = {

};

const tooltipElement = document.getElementsByClassName('aside-content__tooltip')[0];

/**
 * Cancelles created tip
 */
const cancelTip = () => {
    tooltipElement.innerHTML = '';
    tooltipElement.removeAttribute('style');
};

/**
 * Creates tip for click/hover event
 * @param {EventTarget} currentTarget 
 */
const createTip = (currentTarget) => {
    cancelTip();

    const title = tipTexts[currentTarget.className];
    const padding = 5;
    const { top: targetTopPosition, left: targetLeftPosition } = currentTarget.getBoundingClientRect();
    const { height: tooltipHeight } = tooltipElement.getBoundingClientRect();
    const topPos = targetTopPosition - (tooltipHeight + padding);

    tooltipElement.appendChild(document.createTextNode(title)); //add the text node to the newly created div.
    tooltipElement.setAttribute('style', 'top:' + topPos + 'px;' + 'left:' + targetLeftPosition + 'px; display: block;');
}

// const links = document.links;
// for (const i = 0; i < links.length; i++) {
//     const a = links[i];
//     if (a.title !== '') {
//         a.addEventListener('mouseover', createTip);
//         a.addEventListener('mouseout', cancelTip);
//     }
// }
