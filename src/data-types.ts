import { StackData } from './Description/Stack';

export type CompanyData = {
  company: {
    name: string,
    link: string,
    dates: string,
  },
  position: string,
  achivements: Array<string>,
  activity: string,
  stack: Array<StackData>,
}

export type PageDataType = {
  employee: string,
  address: string,
  jobHistory: {
    title: string,
    stackTitle: string,
    jobs: {
      [key: string]: CompanyData
    },
  },
  education: {
    title: string,
    link: string,
    university: string,
    dates: string,
    program: string,
    faculty: string,
  },
  summary: {
    title: string,
    text: string,
    achivements: Array<string>,
    stack: {
      title: string,
      technologies: Array<StackData>,
    },
    english: string
  },
}
