import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import { parse } from 'node-html-parser';
import { App } from '../src/static/App.tsx';

const getJSScriptElement = () => '<script async type="module" src="../src/scripts/index.ts"></script>';

const buildPage = (content) => {
  fs.readFile(`${__dirname}/../public/index.html`, { encoding: 'utf8' }, (err, html) => {
    if (err) {
      throw err;
    }

    const root = parse(html);
    const body = root.getElementsByTagName('BODY')[0];
    body.innerHTML = content + getJSScriptElement();

    fs.writeFileSync(`${__dirname}/../public/index.html`, root.toString());
  });
};

buildPage(ReactDOMServer.renderToStaticMarkup(<App />));
