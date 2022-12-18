import React from 'react';
import { Content } from './interfaces';

const Label = (props: Content) => {
  return (
    <div className="text-sm font-semibold text-brand-extra-icon">
      {props.children}
    </div>
  );
};

export default Label
