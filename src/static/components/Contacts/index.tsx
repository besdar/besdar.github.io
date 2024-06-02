import React from "react";
import { Links } from "./components/Links";
import { PageDataType } from "../../data-types";

type ContactsProps = {
    address: PageDataType["address"];
};

const Component: React.FC<ContactsProps> = ({ address }) => (
    <div className="title-contacts">
        <a rel="noopener noreferrer" href={`https://duckduckgo.com/?q=${encodeURIComponent(address)}&iaxm=maps`} target="_blank">
            <address className="title-contacts-contact">{address}</address>
        </a>
        <div className="title-contacts-divider">|</div>
        <span className="title-contacts-contact title-contacts-email">dmitry.beskov@outlook.com</span>
        <div className="title-contacts-divider">|</div>
        <div className="title-contacts-contact title-contacts-website">besdar.github.io</div>
        <Links />
    </div>
);

export const Contacts = React.memo(Component);
