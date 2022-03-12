import React, { FC } from 'react';

const Component: FC = () => (
  <a className="aside-content__download-button" href="./Dmitry Beskov.pdf" download target="_blank">
    <svg className="aside-content__download-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>PDF</title>
      <path
        d="M12,2C6.49,2,2,6.49,2,12s4.49,10,10,10s10-4.49,10-10S17.51,2,12,2z M11,10V6h2v4h3l-4,4l-4-4H11z M17,17H7v-2h10V17z"
        fill="dodgerblue"
      />
    </svg>
  </a>
);

export const PDFButton = Component;
