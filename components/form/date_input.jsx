import * as React from 'react';
import 'static/css/forms/inputs.css'

export function DateInput(props) {
  return (
    <div className={'input input_date' + props.className}>
      <If condition={props.fieldName}>
        <label className='text-nowrap mr-auto mr-md-2' htmlFor={props.fieldName}>
          {props.fieldName}:
        </label>
      </If>
      <input
        className='form-control'
        id={props.fieldName}
        type='date'
        value={props.date}
        onChange={props.onChange}
        disabled={props.disabled}
      />
    </div>
  );
}

DateInput.defaultProps = {
  date: '',
  fieldName: '',
  onChange: () => {},
  disabled: false,
  className: ''
};
