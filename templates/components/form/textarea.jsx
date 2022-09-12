'use strict';
import * as React from 'react';
import 'css/forms/inputs.css'

export function TextArea(props) {
  const rows = props.text ? Math.round(props.text.length / 41) : 0;

  return (
    <label className={props.className + ' css_full_width'} htmlFor={props.fieldName}>
      <If condition={props.fieldName !== '-'}>{props.fieldName}:</If>
      <textarea
        className='autoExpand css_full_width'
        name={props.fieldName}
        id={props.fieldName}
        value={props.text ? props.text : ''}
        rows={rows > 0 ? rows : 1}
        onChange={props.onChange}
        maxLength={props.maxLength}
        disabled={props.disabled}
        autoFocus={props.autofocus}
      />
    </label>
  );
}

TextArea.defaultProps = {
  text: '',
  fieldName: '-',
  onChange: () => {},
  maxLength: 5000,
  type: 'default',
  disabled: false,
  className: {},
  autofocus: false
};