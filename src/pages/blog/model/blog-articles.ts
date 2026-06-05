import HpCm1015DirectUsbArticle, { metadata as hpCm1015DirectUsbMetadata } from "../content/hp-cm1015-direct-usb-ubuntu.mdx";
import HpCm1015Ubuntu49Article, { metadata as hpCm1015Ubuntu49Metadata } from "../content/hp-cm1015-ubuntu-49-error.mdx";
import UbuntuMicrophoneArticle, { metadata as ubuntuMicrophoneMetadata } from "../content/ubuntu-microphone-ghost-stereo.mdx";
import type { BlogArticle } from "./blog-article";

export const sortBlogArticlesByTitle = (articles: BlogArticle[]) =>
    [...articles].sort((first, second) => first.metadata.title.localeCompare(second.metadata.title));

export const blogArticles: BlogArticle[] = sortBlogArticlesByTitle([
    {
        Content: HpCm1015DirectUsbArticle,
        metadata: hpCm1015DirectUsbMetadata,
        slug: "hp-cm1015-direct-usb-ubuntu",
    },
    {
        Content: HpCm1015Ubuntu49Article,
        metadata: hpCm1015Ubuntu49Metadata,
        slug: "hp-cm1015-ubuntu-49-error",
    },
    {
        Content: UbuntuMicrophoneArticle,
        metadata: ubuntuMicrophoneMetadata,
        slug: "ubuntu-microphone-ghost-stereo",
    },
]);
