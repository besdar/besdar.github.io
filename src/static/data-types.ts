import { Tab } from "./components/Description/components/DescriptionItem/components/Tab";
import { Stack } from "./components/Description/components/Stack";

type DescriptionType = {
    header?: React.ComponentProps<typeof Tab>;
    title?: string;
    subtitle?: string;
    achievements?: Array<string>;
    stack?: React.ComponentProps<typeof Stack>;
    text?: string;
};

export type PageDataType = {
    employee: string;
    address: string;
    jobHistory: {
        title: string;
        stackTitle: "Stack";
        showMoreTitle: "Earlier work experience";
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
};
