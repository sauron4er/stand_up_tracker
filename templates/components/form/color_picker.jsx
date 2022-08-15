'use strict';
import * as React from 'react';

export function ColorPicker(props) {
  return (
    <label className={props.className + ' css_full_width'} htmlFor={props.fieldName}>
      <If condition={props.fieldName !== '-'}>{props.fieldName}:</If>
      <div><input type='color' id={props.fieldName} value={props.color} onChange={props.onChange}/></div>
    </label>
  );
}

ColorPicker.defaultProps = {
  color: '',
  fieldName: '-',
  onChange: () => {},
  disabled: false,
  className: {}
};
