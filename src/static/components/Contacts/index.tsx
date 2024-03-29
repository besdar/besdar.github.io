import React from "react";
import { Links } from "./components/Links";

type ContactsProps = {
    address: string;
};

const Component: React.FC<ContactsProps> = ({ address }) => (
    <div className="title-contacts">
        <address className="title-contacts-contact">{address}</address>
        <div className="title-contacts-divider">|</div>
        <span className="title-contacts-contact title-contacts-email">dmitry.beskov@outlook.com</span>
        <div className="title-contacts-divider">|</div>
        <div className="title-contacts-contact title-contacts-website">besdar.github.io</div>
        <Links />
    </div>
);

export const Contacts = React.memo(Component);
