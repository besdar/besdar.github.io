type StackItemType = {
    title: string;
    description?: string;
};

export type StackType = {
    items?: Array<StackItemType>;
    title: string;
};

export type HeaderType = {
    title: string;
    link?: string;
    dates: string;
};

export type DescriptionType = {
    header?: HeaderType;
    title?: string;
    subtitle?: string;
    achievements?: Array<string>;
    stack?: StackType;
    text?: string;
};

export type PageDataType = {
    employee: string;
    address: string;
    jobHistory: {
        title: string;
        stackTitle: string;
        showMoreTitle: string;
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
