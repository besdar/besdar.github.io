import React from "react";
import { Content } from "./Content";
import { ENGLISH_DATA } from "./data";
import { PDFButton } from "./components/PDFButton";

export const App: React.FC = () => (
    <React.StrictMode>
        <Content {...ENGLISH_DATA} />
        <aside className="body-aside-content aside-content">
            <PDFButton />
        </aside>
    </React.StrictMode>
);
