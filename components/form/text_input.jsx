'use strict';
import * as React from 'react';
import 'static/css/forms/inputs.css';

export function TextInput(props) {
  return (
    <div className='input input_grow_2_cols'>
      <label className={props.className} htmlFor={props.fieldName}>
        <If condition={props.fieldName !== '-'}>{props.fieldName}:</If>
      </label>
      <input
        className='css_full_width'
        type='text'
        name={props.fieldName}
        id={props.fieldName}
        value={props.text ? props.text : ''}
        onChange={props.onChange}
        maxLength={props.maxLength}
        disabled={props.disabled}
        autoFocus={props.autofocus}
      />
    </div>
  );
}

TextInput.defaultProps = {
  text: '',
  fieldName: '-',
  onChange: () => {},
  maxLength: 5000,
  type: 'default',
  disabled: false,
  className: {},
  autofocus: false
};
