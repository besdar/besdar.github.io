import React from "react";
import { PageDataType } from "./data-types";
import { ItemProps as DescriptionItemProps } from "./Description/Item";
import { Description } from "./Description";
import { Contacts } from "./Contacts";

type ContentProps = {
  onClick?: () => void;
};

const Component: React.FC<PageDataType & ContentProps> = ({
  address,
  education,
  employee,
  jobHistory,
  summary,
  onClick,
}) => {
  const jobDescriptionItems: Array<DescriptionItemProps> = Object.keys(
    jobHistory.jobs,
  ).map((jobKey) => {
    const job = jobHistory.jobs[jobKey];

    return {
      tab: {
        title: job.company.name,
        link: job.company.link,
        dates: job.company.dates,
      },
      key: jobKey,
      title: job.position,
      achievements: { achievements: job.achivements },
      stack: { stack: job.stack, title: jobHistory.stackTitle },
      text: job.activity,
    };
  });

  const universityDescription: DescriptionItemProps = {
    tab: {
      title: education.university,
      link: education.link,
      dates: education.dates,
    },
    title: education.program,
    text: education.faculty,
  };

  const summaryDescription: DescriptionItemProps = {
    text: summary.overview,
    stack: {
      stack: summary.stack.technologies,
      title: summary.stack.title,
    },
  };

  return (
    <>
      <header className="body-header">
        <div className="header-title">
          <h1 className="header-title-employee-name">{employee}</h1>
          <h2 style={{ display: "none" }} className="header-title-job-position">
            Frontend developer
          </h2>
        </div>
        <Contacts address={address} />
      </header>
      <main onClick={onClick} className="body-content" role="presentation">
        <Description
          showMoreTitle={jobHistory.showMoreTitle}
          title={jobHistory.title}
          items={jobDescriptionItems}
        />
        <Description
          showMoreTitle={jobHistory.showMoreTitle}
          title={education.title}
          items={[universityDescription]}
        />
        <Description
          showMoreTitle={jobHistory.showMoreTitle}
          title={summary.title}
          items={[summaryDescription]}
        />
        <p>{summary.english}</p>
      </main>
    </>
  );
};

export const Content = Component;
