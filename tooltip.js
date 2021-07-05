'use strict';

const tipTexts = {
    'softwise-stack__js': 'ES5 и ES6, участие в доработке линтера и таск-ранннера, написание кода правил workflow в изолированной среде YouTrack, решение разноплановых задач (как доработка сайтов, так и доработка невидимых рекламных скриптов) и много чего ещё',
    'softwise-stack__jquery': 'Переписывал легаси код на современный стек или дорабатывал его функциональность.',
    'softwise-stack__htmlcss': 'Учавствовал в обсуждении стандартов компании в HTML и CSS, делал рефактор верстки в phtml.',
    'softwise-stack__php': 'Дорабатывал и делал рефактор существующего кода согласно современным стандартам компании, но без архитектурных изменений.',
    'softwise-stack__sql': 'Доработка функций, написание запросов на обновление и получение каких-либо данных.',
    'softwise-stack__react': 'Производил большой рефакторинг существующего кода в том числе архитектурный, писал объемные модули на несколько тысяч строк.',
    'softwise-stack__vue': 'Производил небольшие доработки существующего функционала, брался за Vue и успешно с ним справлялся в положенные сроки при том, что ранее вообще не имел опыта работы с Vue.',
    'bios-stack__react': 'Создавал приложения с чистого листа, сам продумывал архитектуру, разбирал и серьезно дорабатывал (переделывал) существующие проекты, активно использовал TS.',
    'bios-stack__htmlcss': 'Поддерживал несколько различных сайтов, делал серьезный рефактор как CSS, так и HTML. Писал новые страницы и модули для этих сайтов.',
    'bios-stack__js': 'Использовал чистый JS как для написания React приложений, так и для доработки нескольких веб-сайтов.',
    'bios-stack__php': 'Поддержка и доработка существующего легаси-кода, взаимодействие с API 1С-Битрикс, написание небольших php-скриптов, обновление версии PHP.',
    'bios-stack__nodejs': 'Писал серверный JS код для React-приложения, работал с кофигом webpack и babel, использовал npm как таск-раннер так и пакетный менеджер.',
    'bios-stack__1c': 'Как веб-разработчик работал с 1С-Битрикс. Помимо прочей работы в 1С писал много серверного кода для взаимодействия 1С с вебом, API разных приложений (например, Telegram).',
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
 * @param {Event} event 
 */
const createTip = (event) => {
    event.stopPropagation();
    cancelTip();

    const { currentTarget } = event;
    const title = tipTexts[currentTarget.className];
    tooltipElement.appendChild(document.createTextNode(title)); //add the text node to the newly created div.
    tooltipElement.style.display = 'block';

    const padding = 5;
    const { offsetTop: targetTopPosition, offsetLeft: targetLeftPosition, offsetWidth: targetWidth } = currentTarget;
    const { height: tooltipHeight, width: tooltipWidth } = tooltipElement.getBoundingClientRect();
    const topPos = targetTopPosition - (tooltipHeight + padding);
    let leftPos = targetLeftPosition + targetWidth / 2 - tooltipWidth / 2;
    if (leftPos < 10) {
        leftPos = 10;
    } else if (leftPos + tooltipWidth > window.innerWidth - 10) {
        leftPos = window.innerWidth - 10 - tooltipWidth;
    }
    
    tooltipElement.style.top = topPos + 'px';
    tooltipElement.style.left = (leftPos > 0 ? leftPos : 10) + 'px';
    
};

document.body.getElementsByTagName('header')[0].addEventListener('click', cancelTip);
document.body.getElementsByTagName('main')[0].addEventListener('click', cancelTip);

Object.keys(tipTexts).forEach(className => {
    const htmlElement = document.getElementsByClassName(className)[0];

    htmlElement.addEventListener('click', createTip);
});
