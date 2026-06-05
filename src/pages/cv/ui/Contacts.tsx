import React from "react";
import cn from "classnames";
import { baseStyles } from "../../../shared/ui";
import styles from "./contacts.module.css";
import { ContactLinks } from "./ContactLinks";

type ContactsProps = {
    address: string;
    email: string;
    website: string;
};

export const Contacts: React.FC<ContactsProps> = ({ address, email, website }) => (
    <div className={styles["title-contacts"]}>
        <a className={baseStyles.link} rel="noopener noreferrer" href={`https://duckduckgo.com/?q=${encodeURIComponent(address)}&iaxm=maps`} target="_blank">
            <address className={styles["title-contacts-contact"]}>{address}</address>
        </a>
        <div className={styles["title-contacts-divider"]}>|</div>
        <span className={cn(styles["title-contacts-contact"], styles["title-contacts-email"])}>{email}</span>
        <div className={styles["title-contacts-divider"]}>|</div>
        <div className={cn(styles["title-contacts-contact"], styles["title-contacts-website"])}>{website}</div>
        <ContactLinks />
    </div>
);
