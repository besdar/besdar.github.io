import { PageDataType } from "./data-types";

export const ENGLISH_DATA: PageDataType = {
    employee: "Dmitry Beskov",
    address: "Tbilisi, Georgia",
    education: {
        university: {
            header: {
                dates: "2014 - 2018",
                link: "https://etu.ru/en/university/",
                title: "Saint Petersburg State Electrotechnical University",
            },
            title: "«Communication Technologies and Communication Systems»",
            subtitle: "Faculty of Radio Engineering and Telecommunications",
            achievements: [
                "I once created a presentation about video codecs for a seminar and got an A+ not only for my homework but for the whole semester",
                "At the end of my studies, I gave all my materials for the four years to all the first-year students and got a lot of positive feedback from them",
            ],
            stack: { title: "Stack", items: [{ title: "HTTP" }, { title: "OSI Model" }, { title: "C++" }, { title: "Git" }] },
        },
        title: "Education",
    },
    summary: {
        overview:
            "I'm a React front-end developer with over 4 years of experience. When I work, I usually point out the weaknesses in the company's processes and projects, and make suggestions to make our daily work more effective, fun and/or easier. I also try to fix code issues that I see on a regular basis. I really love what I do and I want to continue to grow in the frontend and create something great and special.",
        title: "Summary",
    },
    jobHistory: {
        title: "Work experience",
        stackTitle: "Stack",
        showMoreTitle: "Earlier work experience",
        jobs: [
            {
                header: {
                    dates: "May 2022 - Now",
                    link: "https://www.jettycloud.com/",
                    title: "JettyCloud (UCaaS)",
                },
                title: "Software Developer",
                text: "In this role I usually creating, updating and maintaining various sub-modules for client account pages, internal admin pages",
                achievements: [
                    "Participating in the recruitment process and have developed a technical interview knowledge base for all roles across the company, which improved our interview process and made it easier to prepare for the technical interview",
                    "Have created an account generation chrome extension for the company which greatly facilitates the daily work of both QA engineers and developers",
                    "Mentoring junior front-end developers through code reviews and JS&TS syntax and code design explanation meetings",
                    "Simultaneously working in several teams and on several projects, never missed deadlines",
                ],
                stack: {
                    title: "Stack",
                    items: [
                        {
                            title: "TS",
                        },
                        {
                            title: "React&Redux",
                        },
                        {
                            title: "Java&Kotlin",
                            description: "If necessary, worked with backend projects with new languages",
                        },
                        {
                            title: "GraphQL",
                        },
                    ],
                },
            },
            {
                header: {
                    dates: "December 2020 - May 2022",
                    link: "https://foxford.ru/",
                    title: "Foxford (EdTech)",
                },
                title: "Frontend developer",
                text: "Practically was a team leader, worked a lot with HTML&CSS and performed managerial activities like teamwork process optimization on various development stages",
                achievements: [
                    "Implemented code review for the team, was an organizer of frontend meetings",
                    "Added large adjustment to the ESLint of a team project, added Stylelint, adjusted bundling and CI of the project",
                    "Optimized JS code of the project and work process of the team - developers now are writing faster and more stable code",
                ],
                stack: {
                    title: "Stack",
                    items: [
                        {
                            title: "JS&FlowType",
                            description:
                                "ES5 and ES6+, formed development rules for the team (including ones in linters), added code review process, reduced typing issues in the project",
                        },
                        {
                            title: "JQuery",
                            description: "Rewrote parts of legacy code into modern language stack or adjusted its functionality",
                        },
                        {
                            title: "HTML&CSS",
                            description: "Wrote CSS using BEM design and developed style guides for the team",
                        },
                        {
                            title: "React&Effector",
                            description:
                                "Made large-scale refactoring of existing code including architecture refactoring, wrote large modules for thousands lines",
                        },
                        {
                            title: "NodeJS",
                            description:
                                "Added Puppeteer to the project and made several SEO reports with it; enchanced Rollup building script and config: added code splitting for production build, CSS support, debugging features and much more.",
                        },
                    ],
                },
            },
            {
                header: {
                    dates: "April 2019 - December 2020",
                    title: "BIOS (B2B, startup)",
                },
                text: "Was assigned and successfully resolved the most responsible and fundamental tasks, strictly followed the prescribed project timing, found solutions for various business tasks, independently set personal goals for further business improvement",
                title: "Software developer",
                achievements: [
                    "Web-development: React and Redux / PHP / Typescript / 1C-Bitrix. Maintenence, project development. Self-education, self-refactoring",
                    "System administration: Configuring and deployment of (web-) servers and platforms (1C and others), OS errors resolving, project's git trees management",
                    "Made Telegram client and TOTP algorithm two-factor authentication development for 1C platform",
                ],
                stack: {
                    title: "Stack",
                    items: [
                        {
                            title: "React&Redux",
                            description:
                                "Created new applications, analyzed application architecture, analyzed and seriously rewrote (adjusted) existing projects, actively used TS.",
                        },
                        {
                            title: "HTML&CSS",
                            description:
                                "Supported various websites, made serious refactoring for CSS and HTML. Wrote new pages and modules for these websites.",
                        },
                        {
                            title: "JS",
                            description: "Used vanilla JS (+TS) for React applications as well as for several websites adjustment.",
                        },
                        {
                            title: "PHP",
                            description:
                                "Supported and rewrote existing legacy code, interacted with 1C-Bitrix API, wrote small php-scripts, updated PHP version.",
                        },
                        {
                            title: "HTTP",
                            description:
                                "Was an author of the most difficult API intergation software 1C modules with several government systems and nongovernment companies (including BIOS own services)",
                        },
                        {
                            title: "NodeJS",
                            description:
                                "Wrote server side JS code for React application, worked with webpack and babel configurations, used npm as a task-runner as well as package manager.",
                        },
                        {
                            title: "1C",
                            description:
                                "As a frontend developer worked with 1C-Bitrix. Also wrote a lot of 1C server side code for working with web protocols, various application's APIs (Telegram, for example).",
                        },
                    ],
                },
            },
            {
                header: {
                    title: "Russian utility systems",
                    dates: "December 2018 - March 2019",
                },
                title: "Software developer",
                achievements: [
                    "Automatized work of the delivery and printing department reducing their work by 70%",
                    "Was a fast-learner and as a result created the most difficult 1C software modules by the end of this job",
                    "Talked directly with clients and regular company employees for better understanding their needs and difficulties with the software",
                    "Found out and fixed company's finantional programming errors in the 1C database",
                ],
                text: "Despite the fact that I started working without any programming knowledge, I could become the person that mentored others and was an author of some complex and difficult programming modules",
                stack: {
                    title: "Stack",
                    items: [
                        {
                            title: "1C",
                            description: "Independently learned this programming language from 0 knowledge to a high level in a short time.",
                        },
                        {
                            title: "SQL",
                            description: "Made various SQL requests in the 1C SQL-similar programming language and vanilla SQL",
                        },
                        {
                            title: "HTTP",
                            description: "Enchanced and made new web-services in the 1C programming platform",
                        },
                    ],
                },
            },
        ],
    },
};
