import React, { FC, memo } from 'react';
import { Links } from './links';

type ContactsProps = {
  address: string,
}

const Component: FC<ContactsProps> = ({ address }) => (
  <div className="title-contacts">
    <address className="title-contacts__contact">
      {address}
    </address>
    <div className="title-contacts__divider">|</div>
    <span className="title-contacts__contact title-contacts__email">beskovda@yandex.ru</span>
    <Links />
  </div>
);

export const Contacts = memo(Component);
