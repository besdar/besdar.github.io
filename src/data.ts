import { PageDataType } from './data-types';

const stack = [
  {
    title: 'JavaScript',
  },
  {
    title: 'TypeScript&FlowType',
  },
  {
    title: 'React',
  },
  {
    title: 'Redux&Effector',
  },
  {
    title: 'HTML&CSS',
  },
  {
    title: 'PHP',
  },
  {
    title: 'PostgreSQL',
  },
  {
    title: 'Vue',
  },
  {
    title: 'NodeJS',
  },
  {
    title: 'Webpack',
  },
  {
    title: 'Rollup',
  },
  {
    title: 'Gulp',
  },
  {
    title: 'PWA',
  },
  {
    title: 'jQuery',
  },
  {
    title: 'YouTrack',
  },
  {
    title: 'Apache',
  },
  {
    title: 'Nginx',
  },
  {
    title: '1С',
  },
  {
    title: 'Bash',
  },
  {
    title: 'Python',
  },
  {
    title: 'C++',
  },
];

export const RUSSIAN_DATA: PageDataType = {
  employee: 'Дмитрий Бесков',
  address: 'г. Санкт-Петербург',
  jobHistory: {
    title: 'Опыт работы',
    showMoreTitle: 'Более ранний опыт работы',
    stackTitle: 'Стек',
    jobs: {
      Foxford: {
        company: {
          name: 'Foxford',
          link: 'https://foxford.ru/',
          dates: 'Август 2021 - по настоящее время',
        },
        position: 'Frontend-разработчик',
        achivements: [
          'Ввел код-ревью в команду, организовывал фронтовые встречи',
          'Внес масштабные доработки в ESLint команды, внедрил stylelint, дорабатывал сборку и ci проекта',
          'Оптимизировал работу разработчиков, доработав JS-код проекта, увеличив тем самым скорость разработки и стабильность кода',
        ],
        activity:
          'Фактически выполнял роль тимлида команды, очень много занимался версткой и менеджерской работой по оптимизации процессов разработки от этапа дизайна до релиза.',
        stack: [
          {
            title: 'JS&Flow',
            description:
              'Рефакторинг проекта и выделение однотипных функций в новые общие модули. Обновление пакетов, доработка сборки Rollup. Формирование правил разработки для команды (в том числе в линтере) и введение ревью.',
          },
          {
            title: 'JQuery',
            description: 'Написание простых анимаций и взаимодействий с DOM',
          },
          {
            title: 'HTML&CSS',
            description:
              'Верстка лендов в Webflow. Именование css классов по БЭМ. Работал над разработкой стаил-гайдов для команды',
          },
          {
            title: 'React&Effector',
            description:
              'Написание небольших приложений для лендов, рефакторинг и выделение общих компонент в старом коде.',
          },
          {
            title: 'NodeJS',
            description: 'Внедрение Puppeteer, создание менеджерских отчетов на его базе. Постоянная доработка сборки (rollup): добавление разделения кода (для современных браузеров), CSS, возможностей отладки и много чего еще.',
          },
        ],
      },
      SoftWise: {
        company: {
          name: 'SoftWise',
          link: 'https://softwise.ru/',
          dates: 'Декабрь 2020 - Август 2021',
        },
        position: 'Frontend-разработчик',
        achivements: [
          'Был отмечен как один из самых быстрых разработчиков компании в разработке функционала',
          'Предложил внедрение и улучшение JS линтера, Stylelint, минификацию JS и CSS, активно участвовал в написании style guide по фронту, постоянно осуществял рефакторинг старого кода',
          'Смело брал и успешно делал бэкенд php, postgresql при недостатке рабочей силы',
          'Проявил хорошую самостоятельность в обучении на онбординге',
        ],
        activity:
          'Основная деятельность заключалась в разработке рекламных js-скриптов, внутренней админки компании, личных кабинетов клиентов компании',
        stack: [
          {
            title: 'JS&TS',
            description:
              'ES5 и ES6+, TS, участие в доработке линтера и таск-ранннера, написание кода правил workflow в изолированной среде YouTrack, решение разноплановых задач (как доработка сайтов, так и доработка невидимых рекламных скриптов) и много чего ещё.',
          },
          {
            title: 'JQuery',
            description:
              'Переписывал легаси код на современный стек или дорабатывал его функциональность.',
          },
          {
            title: 'HTML&CSS',
            description:
              'Учавствовал в обсуждении стандартов компании в HTML и CSS, делал рефактор верстки в phtml.',
          },
          {
            title: 'PHP',
            description:
              'Дорабатывал и делал рефактор существующего кода согласно современным стандартам компании, но без архитектурных изменений.',
          },
          {
            title: 'PostgreSQL',
            description:
              'Доработка функций, написание запросов на обновление и получение каких-либо данных.',
          },
          {
            title: 'React&Redux',
            description:
              'Производил большой рефакторинг существующего кода в том числе архитектурный, писал объемные модули на несколько тысяч строк.',
          },
          {
            title: 'Vue',
            description:
              'Производил небольшие доработки существующего функционала, брался за Vue и успешно с ним справлялся в положенные сроки при том, что ранее вообще не имел опыта работы с Vue.',
          },
        ],
      },
      BIOS: {
        company: {
          name: 'БИОС',
          link: 'https://bios.guru/',
          dates: 'Апрель 2019 - Декабрь 2020',
        },
        position: 'Программист',
        achivements: [
          'Web-разработка: React и Redux / PHP / Typescript / Bitrix / HTTP. Поддержка, развертывание и создание проектов. Самообучение, саморефакторинг.',
          'Системное администрирование: Настройка и развертываение (веб-)серверов и платформ (1С), решение ошибок ОС, управление ветвлением в проектах.',
          'Разработка 1С клиента телеграм, разработка TOTP-алгоритма двухфакторной аутентификации',
          'Работа с 1С на серьезном уровне: принятие архитектурных решений, работа с нестандартными механизмами. EDT.',
        ],
        activity:
          'Получал и справлялся с самыми ответственными и фундаментальными задачами, не нарушал сроков и находил решение для любых задач; сам инициировал себе задачи.',
        stack: [
          {
            title: 'React&Redux',
            description:
              'Создавал приложения с чистого листа, сам продумывал архитектуру, разбирал и серьезно дорабатывал (переделывал) существующие проекты, активно использовал TS.',
          },
          {
            title: 'HTML&CSS',
            description:
              'Поддерживал несколько различных сайтов, делал серьезный рефактор как CSS, так и HTML. Писал новые страницы и модули для этих сайтов.',
          },
          {
            title: 'JS&TS',
            description:
              'Использовал чистый JS (+TS) как для написания React приложений, так и для доработки нескольких веб-сайтов.',
          },
          {
            title: 'PHP',
            description:
              'Поддержка и доработка существующего легаси-кода, взаимодействие с API 1С-Битрикс, написание небольших php-скриптов, обновление версии PHP.',
          },
          {
            title: 'HTTP',
            description: 'Стал автором сложных модулей по работе с API в 1С как государственных систем (ФНС, ЭПТС), так и частных (Яндекс.Карты, dadata) в том числе собственных систем компании',
          },
          {
            title: 'NodeJS',
            description:
              'Писал серверный JS код для React-приложения, работал с кофигом webpack и babel, использовал npm как таск-раннер так и пакетный менеджер.',
          },
          {
            title: '1С',
            description:
              'Как веб-разработчик работал с 1С-Битрикс. Помимо прочей работы в 1С писал много серверного кода для взаимодействия 1С с вебом, API разных приложений (например, Telegram).',
          },
        ],
      },
      RKS: {
        company: {
          name: 'РКС',
          link: 'https://www.roscomsys.ru/',
          dates: 'Декабрь 2018 - Март 2019',
        },
        position: 'Инженер-программист',
        achivements: [
          'Оптимизировал работу отдела печати и рассылки, автоматизировав 70% его работы',
          'Быстро обучился и по итогу создал сложнейшие модули в системе 1С для нужд компании',
          'Взаимодействовал напрямую с клиентами и работниками компании для программного решения их нужд и сложностей работы',
          'Находил и исправлял серьезные финансовые ошибки возникающие в базе данных 1С',
        ],
        activity:
          'Не смотря на то, что пришел без знания языка, быстро смог ему обучиться и в результате менторил новичков, решал сложнейшие софтверные вопросы компании',
        stack: [
          {
            title: '1С',
            description:
              'Самостоятельно обучился языку с 0 до серьезного уровня за короткое время. К моменту окончания работы в компании менторил новичков и был автором сложнейших подсистем в компании',
          },
          {
            title: 'SQL',
            description:
              'Писал запросы различной сложности как на SQL-подобном языке от 1С, так и на чистом SQL',
          },
          {
            title: 'HTTP',
            description:
              'Создавал и дорабатывал веб-сервисы платформы 1С',
          },
        ],
      },
    },
  },
  education: {
    title: 'Образование',
    link: 'https://etu.ru/',
    university: 'СПбГЭТУ «ЛЭТИ»',
    dates: '2014 - 2018',
    program: '«Инфоккомуникационные технологии и системы связи»',
    faculty: 'Факультет радиотехники и телекоммуникаций',
  },
  summary: {
    title: 'Навыки',
    achivements: [
      'Способен найти и предложить стек инструментов для решения поступившей бизнес-задачи; выдвигаю предложения по модернизации и оптимизации существующего кода.',
      'Быстро учусь и погружаюсь в новый проект/архитектуру.',
      'Люблю свою сферу: смотрю и слушаю онлайн-лекции и интернет-конференции; пробую на вкус самые разные технологии и языки',
    ],
    text: 'Хочу развиваться в направлении React-приложений, мобильной разработки и (изучать) работать с технологиями и языками, с которыми я ещё не сталкивался.',
    stack: {
      title: 'Технологии и языки с которыми мне довелось поработать',
      technologies: stack,
    },
    english: 'Английский: Легко могу говорить и писать, но не без ошибок',
  },
};

export const ENGLISH_DATA: PageDataType = {
  employee: 'Dmitry Beskov',
  address: 'Saint Petersburg, Russia',
  education: {
    dates: '2014 - 2018',
    faculty: 'Faculty of Radio Engineering and Telecommunications',
    link: 'https://etu.ru/en/university/',
    program: '«Communication Technologies and Communication Systems»',
    title: 'Education',
    university: 'ETU «LETI»',
  },
  summary: {
    achivements: [
      'Is capable of finding and offering stack on technologies for business task solving, suggesting initiatives for modernization and optimization of the existing code base',
      'Has fast-learning skills and quickly adapts to working with new codes and architectures',
      'Enjoys working in the IT sphere, continuously watches and listens to online lectures and conferences, explores various technologies and programming languages',
    ],
    english: "English (B1): I'm ok with writing and speaking, but I make mistakes sometimes.",
    stack: {
      title: 'Technologies and languages I worked with',
      technologies: stack,
    },
    text: 'I am eager to grow in the field of React and mobile development, to explore new technologies and programming languages and work with them',
    title: 'Summary',
  },
  jobHistory: {
    title: 'Work experience',
    stackTitle: 'Stack',
    showMoreTitle: 'Earlier work experience',
    jobs: {
      Foxford: {
        company: {
          dates: 'August 2021 - Now',
          link: 'https://foxford.ru/',
          name: 'Foxford',
        },
        position: 'Frontend developer',
        activity: 'Practically was a team leader, worked a lot with HTML&CSS and performed managerial activities like teamwork process optimization on various development stages',
        achivements: [
          'Implemented code review for the team, was an organizer of frontend meetings',
          'Added large adjustment to the ESLint of a team project, added Stylelint, adjusted bundling and CI of the project',
          'Optimized JS code of the project and work process of the team - developers now are writing faster and more stable code',
        ],
        stack: [
          {
            title: 'JS&Flow',
            description:
              'Formed development rules for the team (including ones in linters), added code review process, reduced typing issues in the project',
          },
          {
            title: 'JQuery',
            description: 'Made simple animation and changes in DOM',
          },
          {
            title: 'HTML&CSS',
            description:
              'Wrote CSS classes using BEM design and developed style guides for the team.',
          },
          {
            title: 'React&Effector',
            description:
              'Made little apps, refactored an old code',
          },
          {
            title: 'NodeJS',
            description: 'Added Puppeteer to the project and made several SEO reports with it; enchanced Rollup building script and config: added code splitting for production build, CSS support, debugging features and much more.',
          },
        ],
      },
      Adsterra: {
        company: {
          name: 'Adsterra',
          dates: 'December 2020 - June 2021',
          link: 'https://adsterra.com/',
        },
        activity: "Main fields of activity were development of the advertising JS-scripts, inner admin tools and company's clients' account pages.",
        position: 'Frontend developer',
        achivements: [
          'Was noticed as one of the fastest employees in feature development',
          'Offered JS linter and Styleint improvement and integration techniques, minification of JS and CSS; took active part in writing the frontend style guide; has a rich experience in refactoring the legacy code',
          'Successfully and confidently worked with php and PostgreSQL backend in an under-staffed company environment',
          'Studied independently during the onboarding education process',
        ],
        stack: [
          {
            title: 'JS',
            description: 'ES5 and ES6+, TS, took part in the JS linter and task-runner (gulp) adjustment, wrote rules for YouTrack workflows, solved various tasks (websites adjustment, adjustment invisible advertising scripts, etc.) and many other things.',
          },
          {
            title: 'JQuery',
            description: 'Rewrote legacy code into modern language stack or adjusted its functionality',
          },
          {
            title: 'HTML&CSS',
            description: 'Participated in the HTML and CSS code style standarts discussions, made refactoring HTML layout in the phtml files.',
          },
          {
            title: 'PHP',
            description: "Rewrote and refactored existing code in accordance with the company's standards (but with no changes in app's architecture)",
          },
          {
            title: 'PostgreSQL',
            description: 'Rewrote functions, writing queries for updating and getting various data.',
          },
          {
            title: 'React&Redux',
            description: 'Made large-scale refactoring of existing code including architecture refactoring, wrote large modules for thousands lines.',
          },
          {
            title: 'Vue',
            description: 'Made small fixes in existing functionality, took part in working with Vue and succesfully handled tasks on time regardless of the lack of experience in working with Vue.',
          },
        ],
      },
      BIOS: {
        company: {
          dates: 'April 2019 - December 2020',
          link: 'https://bios.guru/',
          name: 'BIOS',
        },
        activity: 'Was assigned and successfully resolved the most responsible and fundamental tasks, strictly followed the prescribed project timing, found solutions for various business tasks, independently set personal goals for further business improvement',
        position: 'Software developer',
        achivements: [
          'Web-development: React and Redux / PHP / Typescript / 1C-Bitrix. Maintenence, project development. Self-education, self-refactoring',
          "System administration: Configuring and deployment of (web-) servers and platforms (1C and others), OS errors resolving, project's git trees management",
          'Telegram client and TOTP algorithm two-factor authentication development for 1C platform',
        ],
        stack: [
          {
            title: 'React&Redux',
            description: 'Created new applications, analyzed application architecture, analyzed and seriously rewrote (adjusted) existing projects, actively used TS.',
          },
          {
            title: 'HTML&CSS',
            description: 'Supported various websites, made serious refactoring for CSS and HTML. Wrote new pages and modules for these websites.',
          },
          {
            title: 'JS',
            description: 'Used vanilla JS (+TS) for React applications as well as for several websites adjustment.',
          },
          {
            title: 'PHP',
            description: 'Supported and rewrote existing legacy code, interacted with 1C-Bitrix API, wrote small php-scripts, updated PHP version.',
          },
          {
            title: 'HTTP',
            description: 'Was an author of the most difficult API intergation software 1C modules with several government systems and nongovernment companies (including BIOS own services)',
          },
          {
            title: 'NodeJS',
            description: 'Wrote server side JS code for React application, worked with webpack and babel configurations, used npm as a task-runner as well as package manager.',
          },
          {
            title: '1С',
            description: "As a frontend developer worked with 1C-Bitrix. Also wrote a lot of 1C server side code for working with web protocols, various application's APIs (Telegram, for example).",
          },
        ],
      },
      RKS: {
        company: {
          name: 'Russian utility systems',
          link: 'https://www.roscomsys.ru/',
          dates: 'December 2018 - March 2019',
        },
        position: 'Software developer',
        achivements: [
          'Automatized work of the delivery and printing department reducing their work by 70%',
          'Was a fast-learner and as a result created the most difficult 1C software modules by the end of this job',
          'Talked directly with clients and regular company employees for better understanding their needs and difficulties with the software',
          'Found out and fixed company\'s finantional programming errors in the 1C database',
        ],
        activity:
          'Despite the fact that I started working without any programming knowledge, I could become the person that mentored others and was an author of some complex and difficult programming modules',
        stack: [
          {
            title: '1C',
            description:
              'Independently learned this programming language from 0 knowledge to a high level in a short time.',
          },
          {
            title: 'SQL',
            description:
              'Made various SQL requests in the 1C SQL-similar programming language and vanilla SQL',
          },
          {
            title: 'HTTP',
            description:
              'Enchanced and made new web-services in the 1C programming platform',
          },
        ],
      },
    },
  },
};
