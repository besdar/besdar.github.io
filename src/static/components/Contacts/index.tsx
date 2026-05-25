import React from "react";
import { Links } from "./components/Links";

type ContactsProps = {
    address: string;
    email: string;
    website: string;
};

export const Contacts: React.FC<ContactsProps> = ({ address, email, website }) => (
    <div className="title-contacts">
        <a className="link" rel="noopener noreferrer" href={`https://duckduckgo.com/?q=${encodeURIComponent(address)}&iaxm=maps`} target="_blank">
            <address className="title-contacts-contact">{address}</address>
        </a>
        <div className="title-contacts-divider">|</div>
        <span className="title-contacts-contact title-contacts-email">{email}</span>
        <div className="title-contacts-divider">|</div>
        <div className="title-contacts-contact title-contacts-website">{website}</div>
        <Links />
    </div>
);
