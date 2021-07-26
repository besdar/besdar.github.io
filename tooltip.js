'use strict';

const language = document.documentElement.lang;
const tipTexts = {};

if (language === 'ru') {
    tipTexts['bios-stack__1c'] = 'Как веб-разработчик работал с 1С-Битрикс. Помимо прочей работы в 1С писал много серверного кода для взаимодействия 1С с вебом, API разных приложений (например, Telegram).';
    tipTexts['bios-stack__htmlcss'] = 'Поддерживал несколько различных сайтов, делал серьезный рефактор как CSS, так и HTML. Писал новые страницы и модули для этих сайтов.';
    tipTexts['bios-stack__js'] = 'Использовал чистый JS (+TS) как для написания React приложений, так и для доработки нескольких веб-сайтов.';
    tipTexts['bios-stack__nodejs'] = 'Писал серверный JS код для React-приложения, работал с кофигом webpack и babel, использовал npm как таск-раннер так и пакетный менеджер.';
    tipTexts['bios-stack__php'] = 'Поддержка и доработка существующего легаси-кода, взаимодействие с API 1С-Битрикс, написание небольших php-скриптов, обновление версии PHP.';
    tipTexts['bios-stack__react'] = 'Создавал приложения с чистого листа, сам продумывал архитектуру, разбирал и серьезно дорабатывал (переделывал) существующие проекты, активно использовал TS.';
    tipTexts['softwise-stack__htmlcss'] = 'Учавствовал в обсуждении стандартов компании в HTML и CSS, делал рефактор верстки в phtml.';
    tipTexts['softwise-stack__jquery'] = 'Переписывал легаси код на современный стек или дорабатывал его функциональность.';
    tipTexts['softwise-stack__js'] = 'ES5 и ES6+, TS, участие в доработке линтера и таск-ранннера, написание кода правил workflow в изолированной среде YouTrack, решение разноплановых задач (как доработка сайтов, так и доработка невидимых рекламных скриптов) и много чего ещё.';
    tipTexts['softwise-stack__php'] = 'Дорабатывал и делал рефактор существующего кода согласно современным стандартам компании, но без архитектурных изменений.';
    tipTexts['softwise-stack__react'] = 'Производил большой рефакторинг существующего кода в том числе архитектурный, писал объемные модули на несколько тысяч строк.';
    tipTexts['softwise-stack__sql'] = 'Доработка функций, написание запросов на обновление и получение каких-либо данных.';
    tipTexts['softwise-stack__vue'] = 'Производил небольшие доработки существующего функционала, брался за Vue и успешно с ним справлялся в положенные сроки при том, что ранее вообще не имел опыта работы с Vue.';
} else if (language === 'en') {
    tipTexts['bios-stack__1c'] = 'As a frontend developer worked with 1C-Bitrix. Also wrote a lot of 1C server side code for working with web protocols, various application\'s APIs (Telegram, for example).';
    tipTexts['bios-stack__htmlcss'] = 'Supported various websites, made serious refactoring for CSS and HTML. Wrote new pages and modules for these websites.';
    tipTexts['bios-stack__js'] = 'Used vanilla JS (+TS) for React applications as well as for several websites adjustment.';
    tipTexts['bios-stack__nodejs'] = 'Wrote server side JS code for React application, worked with webpack and babel configurations, used npm as a task-runner as a well package manager.';
    tipTexts['bios-stack__php'] = 'Supported and rewrote existing legacy code, interacted with 1C-Bitrix API, wrote small php-scripts, updated PHP version.';
    tipTexts['bios-stack__react'] = 'Created new applications, analyzed application architecture, analyzed and seriously rewrote (adjusted) existing projects, actively used TS.';
    tipTexts['softwise-stack__htmlcss'] = 'Participated in the HTML and CSS code style standarts discussions, made refactoring HTML layout in the phtml files.';
    tipTexts['softwise-stack__jquery'] = 'Rewrote legacy code into modern language stack or adjusted its functionality';
    tipTexts['softwise-stack__js'] = 'ES5 and ES6+, TS, took part in the JS linter and task-runner (gulp) adjustment, wrote rules for YouTrack workflows, solved various tasks (websites adjustment, adjustment invisible advertising scripts, etc.) and many other things.';
    tipTexts['softwise-stack__php'] = 'Rewrote and refactored existing code in accordance with the company\'s standards (didn\'t change the app\'s architecture)';
    tipTexts['softwise-stack__react'] = 'Made large-scale refactoring of existing code including architecture refactoring, wrote large modules for thousands lines.';
    tipTexts['softwise-stack__sql'] = 'Rewrote functions, writing queries for updating and getting various data.';
    tipTexts['softwise-stack__vue'] = 'Made small fixes in existing functionality, took part in working with Vue and succesfully handled tasks on time regardless of the lack of experience in working with Vue.';
}

const tooltipElement = document.getElementsByClassName('aside-content__tooltip')[0];
let isClicked = false;

/**
 * Cancelles created tip
 * @param {boolean} isHover
 */
const cancelTip = (isHover = false) => {
    if (isHover && isClicked) {
        return;
    }

    tooltipElement.innerHTML = '';
    tooltipElement.removeAttribute('style');
};

/**
 * Creates tip for click/hover event
 * @param {Event} event 
 * @param {boolean} isHover
 */
const createTip = (event, isHover = false) => {
    event.stopPropagation();

    cancelTip();

    const { currentTarget } = event;
    const title = tipTexts[currentTarget.className];
    tooltipElement.appendChild(document.createTextNode(title)); //add the text node to the newly created div.
    tooltipElement.style.display = 'block';

    const padding = 5;
    const windowPadding = 10;
    const { offsetTop: targetTopPosition, offsetLeft: targetLeftPosition, offsetWidth: targetWidth } = currentTarget;
    const { height: tooltipHeight, width: tooltipWidth } = tooltipElement.getBoundingClientRect();
    const topPos = targetTopPosition - (tooltipHeight + padding);
    let leftPos = targetLeftPosition + targetWidth / 2 - tooltipWidth / 2;
    if (leftPos < windowPadding) {
        leftPos = windowPadding;
    } else if (leftPos + tooltipWidth > window.innerWidth - windowPadding) {
        leftPos = window.innerWidth - windowPadding - tooltipWidth;
    }

    tooltipElement.style.top = topPos + 'px';
    tooltipElement.style.left = leftPos + 'px';
    isClicked = !isHover;
};

document.body.addEventListener('click', e => cancelTip(e.target.className === 'aside-content__tooltip'));

Object.keys(tipTexts).forEach(className => {
    const htmlElement = document.getElementsByClassName(className)[0];

    htmlElement.addEventListener('click', createTip);
    htmlElement.addEventListener('mouseover', e => createTip(e, true));
    htmlElement.addEventListener('mouseout', e => cancelTip(true));
});
