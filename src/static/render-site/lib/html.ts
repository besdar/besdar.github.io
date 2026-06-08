import { renderToStaticMarkup } from "preact-render-to-string";
import type { SitePage } from "../types";

const documentTemplate =
    '<!doctype html>\n<html lang="en">\n<head>\n  <meta http-equiv="Content-Security-Policy" content="default-src \'self\'">\n  <meta http-equiv="X-Content-Type-Options" content="nosniff">\n  <meta charset="utf-8">\n  <title>__TITLE__</title>\n  <meta name="description" content="__DESCRIPTION__">\n  <meta name="author" content="Dmitry Beskov">\n  <meta name="viewport" content="width=device-width">\n  <link rel="icon" href="__ASSET_PREFIX__favicon.svg" type="image/svg+xml">\n  <link rel="stylesheet" href="__ASSET_PREFIX__css/index.css">\n  <link rel="stylesheet" href="__ASSET_PREFIX__css/mobile.css">\n  <link rel="stylesheet" href="__ASSET_PREFIX__css/desktop.css">\n  <link rel="stylesheet" href="__ASSET_PREFIX__css/print.css">\n</head>\n<body class="__BODY_CLASS__">__MARKUP__<script async type="module" src="__ASSET_PREFIX__assets/index.js"></script></body>\n</html>';

export const getAssetPrefix = (outputPath: string) => {
    const depth = outputPath.split("/").length - 1;

    if (depth === 0) {
        return "./";
    }

    return "../".repeat(depth);
};

export const escapeHtml = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

export const renderDocument = ({ bodyClass, content, description, outputPath, title }: SitePage) => {
    const assetPrefix = getAssetPrefix(outputPath);
    const markup = renderToStaticMarkup(content);

    return documentTemplate
        .replace("__TITLE__", escapeHtml(title))
        .replace("__DESCRIPTION__", escapeHtml(description))
        .replaceAll("__ASSET_PREFIX__", assetPrefix)
        .replace("__BODY_CLASS__", bodyClass)
        .replace("__MARKUP__", markup);
};
