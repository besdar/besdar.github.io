import { Tab } from "./components/Description/components/DescriptionItem/components/Tab";
import { Stack } from "./components/Description/components/Stack";

export type DescriptionType = {
    header?: React.ComponentProps<typeof Tab>;
    title: {label: string, link?: string};
    subtitle?: string;
    achievements: Array<string>;
    stack: React.ComponentProps<typeof Stack>['items'];
    summary?: string;
    projectsDescriptions?: string[];
};

export type PageDataType = {
    employee: string;
    address: string;
    jobs: {
        title: string;
        items: DescriptionType[];
    };
    education: {
        title: string;
        items: DescriptionType[];
    };
    summary: {
        title: string;
        overview: string;
    };
    projects: {
        title: string;
        items: DescriptionType[];
    };
};
