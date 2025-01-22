import { Tab } from "./components/Description/components/DescriptionItem/components/Tab";
import { Stack } from "./components/Description/components/Stack";

export type DescriptionType = {
    header?: React.ComponentProps<typeof Tab>;
    title: {label: string, link?: string};
    subtitle?: string;
    achievements: Array<string>;
    stack: React.ComponentProps<typeof Stack>['items'];
    summary?: string;
};

export type PageDataType = {
    employee: string;
    address: string;
    jobHistory: {
        title: string;
        jobs: DescriptionType[];
    };
    education: {
        title: string;
        university: DescriptionType;
    };
    summary: {
        title: string;
        overview: string;
    };
    foss: {
        title: string;
        projects: DescriptionType[];
    };
};
