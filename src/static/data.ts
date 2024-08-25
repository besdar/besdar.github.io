import { PageDataType } from "./data-types";

export const LANG_DATA: Readonly<PageDataType> = {
    employee: "Dmitry Beskov",
    address: "Tbilisi, Georgia",
    education: {
        university: {
            header: {
                dates: "2014 - 2018",
                link: "https://etu.ru/en/university/",
                title: "Saint Petersburg State Electrotechnical University",
            },
            title: "Communication Technologies and Communication Systems",
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
            "I am an experienced React frontend developer with over 5 years of experience. Known for my ability to quickly learn and adapt to new technologies, I have been recognized by colleagues and supervisors alike and consistently exceed expectations. My passion for building new and meaningful applications fuels my work, and I am eager to join a company that aligns with my values and is committed to delivering products that make a positive difference in people's lives.",
        title: "Summary",
    },
    jobHistory: {
        title: "Work experience",
        stackTitle: "Stack",
        showMoreTitle: "Earlier work experience",
        jobs: [
            {
                header: {
                    dates: "2022 - 2024",
                    link: "https://www.jettycloud.com/",
                    title: "JettyCloud (UCaaS)",
                },
                title: "Senior Software Developer",
                text: "In this role, I was usually responsible for creating, updating and maintaining countless billing sub-modules for customer account pages and internal administration pages, enhancing user experience",
                achievements: [
                    "Contributed simultaneously with more than 4 teams (around 30 people) on more than 3 projects and received only positive feedback from my colleagues and supervisors alike during a performance review process",
                    "Was noticed as one of the fastest employees in the team",
                    "Was the author of more than 50 technical tasks designed to improve the performance and quality of the code",
                    "Designed a centralized repository of technical interview questions and evaluation criteria, enhancing the recruitment process; this repository is now utilized by several teams to ensure consistency and quality in technical interviews",
                    "Created a Chrome extension tool to generate test accounts, which made the daily work of both QA engineers and developers much easier",
                ],
                stack: {
                    title: "Stack",
                    items: [
                        {
                            title: "TypeScript",
                        },
                        {
                            title: "React",
                        },
                        {
                            title: "Jest&RTL",
                        },
                        {
                            title: "Java&Kotlin",
                            description: "When it was necessary, I worked with backend projects and these were new languages for me",
                        },
                        {
                            title: "GraphQL",
                            description: "I have created couple of GraphQL requests in an exiting project",
                        },
                    ],
                },
            },
            {
                header: {
                    dates: "2021 - 2022",
                    link: "https://foxford.ru/",
                    title: "Foxford (EdTech)",
                },
                title: "Frontend developer",
                text: "Practically was a team leader (4 developers), worked a lot with HTML&CSS and performed managerial activities like teamwork process optimization on various development stages",
                achievements: [
                    "Started a code review process for the team, was an organizer of weekly frontend meetings",
                    "Proposed many new rules to the ESLint to make it stricter in the project, integrated Stylelint, created code style guides for the team. As a result, the development process became faster and our product became more stable",
                    "Enhanced the Rollup building script and configuration to deliver less data to our customers: implemented code splitting for production builds, CSS modules support, source maps and much more",
                    "Improved our Lighthouse performance and SEO metrics by 30%, and started an epic task of moving from a 3rd party website builder to React template based development",
                ],
                stack: {
                    title: "Stack",
                    items: [
                        {
                            title: "JS&Flow",
                            description:
                                "Formed development rules for the team (including ones in linters), added code review process, reduced typing issues in the project",
                        },
                        {
                            title: "JQuery",
                            description: "Implemented simple animations and scripts",
                        },
                        {
                            title: "HTML&CSS",
                            description: "Wrote CSS classes using BEM design and developed style guides for the team",
                        },
                        {
                            title: "React&Effector",
                        },
                        {
                            title: "NodeJS",
                            description: "Added Puppeteer to the project and made several SEO reports with it for managers",
                        },
                    ],
                },
            },
            {
                header: {
                    title: "Adsterra (AdTech)",
                    dates: "2020 - 2021",
                    link: "https://adsterra.com/",
                },
                text: "My main areas of work included the development of the advertising JS scripts, internal admin tools and the company's client account pages. Formerly I was employed at another company, but I worked on Adsterra's projects",
                title: "Frontend developer",
                achievements: [
                    "Was noticed as one of the fastest employees in our department",
                    "Offered JS linter and Stylelint improvements and integration techniques, minification of JS and CSS; took active part in writing our frontend style guide; played a significant role in the refactoring process of our legacy code to modern syntax",
                    "Successfully and confidently worked with PHP and PostgreSQL backends when the company was understaffed and needed a backend boost",
                    "Was praised for being self-sufficient during the onboarding process",
                ],
                stack: {
                    title: "Stack",
                    items: [
                        {
                            title: "JS",
                            description:
                                "ES5 and ES6+, TS, took part in the JS linter and task-runner (gulp) adjustment, wrote rules for YouTrack workflows, solved various tasks (websites adjustment, adjustment invisible advertising scripts, etc.) and many other things.",
                        },
                        {
                            title: "JQuery",
                            description: "Rewrote legacy code into modern language stack or adjusted its functionality",
                        },
                        {
                            title: "HTML&CSS",
                            description: "Participated in the HTML and CSS code style standarts discussions, made refactoring HTML layout in the phtml files.",
                        },
                        {
                            title: "PHP",
                            description: "Rewrote and refactored existing code in accordance with the company's standards",
                        },
                        {
                            title: "PostgreSQL",
                            description: "Rewrote functions, writing queries for updating and getting various data.",
                        },
                        {
                            title: "React&Redux",
                            description:
                                "Made large-scale refactoring of existing code including architecture refactoring, rewrote large modules with thousands of lines.",
                        },
                        {
                            title: "Vue",
                            description:
                                "Made small fixes in existing functionality, took part in working with Vue and succesfully handled tasks on time regardless of the lack of experience in working with Vue.",
                        },
                    ],
                },
            },
            {
                header: {
                    dates: "2019 - 2020",
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
                    title: "Russian utility company",
                    dates: "2018 - 2019",
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
                            description: "Enhanced and made new web-services in the 1C programming platform",
                        },
                    ],
                },
            },
        ],
    },
};
