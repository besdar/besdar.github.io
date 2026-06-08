import { metadata as cvMetadata } from "../content/cv.mdx";

const siteUrl = "https://besdar.github.io/";
const markdownCvUrl = `${siteUrl}Dmitry_Beskov.md`;
const pdfCvUrl = `${siteUrl}Dmitry_Beskov.pdf`;

const professionalProfiles = ["https://github.com/besdar", "https://www.linkedin.com/in/besdar/", "https://t.me/besdarrr"];

const skills = [
    "TypeScript",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Micro frontends",
    "GraphQL",
    "Node.js",
    "Jest",
    "React Testing Library",
    "GitLab CI/CD",
    "ESLint",
    "Stylelint",
    "SonarQube",
    "Rollup",
    "Vite",
    "PostgreSQL",
    "PHP",
];

const employmentHistory = [
    {
        description: "Builds and maintains billing, purchase, checkout, payment-method, trial-license, hardware-purchase, and customer self-service flows.",
        memberOf: {
            "@type": "Organization",
            name: "RingCentral (UCaaS)",
            url: "https://www.ringcentral.com/",
        },
        roleName: "Senior Software Developer",
        startDate: "2022-05",
    },
    {
        description:
            "Led frontend process improvements, code review, linting, Rollup build optimization, React template work, and Lighthouse performance and SEO improvements.",
        endDate: "2022",
        memberOf: {
            "@type": "Organization",
            name: "Foxford (EdTech)",
            url: "https://foxford.ru/",
        },
        roleName: "Frontend Developer",
        startDate: "2021",
    },
    {
        description:
            "Worked on advertising scripts, internal admin tools, client account pages, frontend style guides, legacy refactoring, PHP, and PostgreSQL support.",
        endDate: "2021",
        memberOf: {
            "@type": "Organization",
            name: "Adsterra (AdTech)",
            url: "https://adsterra.com/",
        },
        roleName: "Frontend Developer",
        startDate: "2020",
    },
    {
        description:
            "Built and maintained React, Redux, TypeScript, PHP, 1C-Bitrix, system administration, deployment, and integration work for a B2B startup.",
        endDate: "2020",
        memberOf: {
            "@type": "Organization",
            name: "BIOS (B2B startup)",
        },
        roleName: "Software Developer",
        startDate: "2019",
    },
    {
        description:
            "Automated delivery and printing department work, built 1C modules, worked directly with internal users, and fixed financial programming errors.",
        endDate: "2019",
        memberOf: {
            "@type": "Organization",
            name: "Russian utility company",
        },
        roleName: "Software Developer",
        startDate: "2018",
    },
];

export const cvJsonLd = {
    "@context": "https://schema.org",
    "@id": `${siteUrl}#cv`,
    "@type": "ProfilePage",
    about: {
        "@id": `${siteUrl}#person`,
    },
    inLanguage: "en",
    mainEntity: {
        "@id": `${siteUrl}#person`,
        "@type": "Person",
        address: {
            "@type": "PostalAddress",
            addressCountry: "BG",
            addressLocality: "Sofia",
        },
        alumniOf: {
            "@type": "OrganizationRole",
            alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Saint Petersburg State Electrotechnical University",
                url: "https://etu.ru/en/university/",
            },
            endDate: "2018",
            roleName: "Communication Technologies and Communication Systems",
            startDate: "2014",
        },
        email: `mailto:${cvMetadata.email}`,
        hasOccupation: {
            "@type": "Occupation",
            name: cvMetadata.position,
            skills,
        },
        jobTitle: cvMetadata.position,
        knowsAbout: skills,
        memberOf: employmentHistory.map((job) => ({
            "@type": "EmployeeRole",
            ...job,
        })),
        name: cvMetadata.employee,
        sameAs: professionalProfiles,
        subjectOf: [
            {
                "@type": "DigitalDocument",
                encodingFormat: "text/markdown",
                name: "Dmitry Beskov CV as Markdown",
                url: markdownCvUrl,
            },
            {
                "@type": "DigitalDocument",
                encodingFormat: "application/pdf",
                name: "Dmitry Beskov CV as PDF",
                url: pdfCvUrl,
            },
        ],
        url: siteUrl,
        worksFor: {
            "@type": "Organization",
            name: "RingCentral (UCaaS)",
            url: "https://www.ringcentral.com/",
        },
    },
    name: "Dmitry Beskov CV",
    url: siteUrl,
};
