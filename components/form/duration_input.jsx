import * as React from 'react';
import 'static/css/forms/inputs.css';

export function DurationInput(props) {
  function onHoursChange(e) {
    props.onChange(parseInt(e.target.value), props.minutes)
  }

  function onMinutesChange(e) {
    // console.log(e.target.value);
    if (parseInt(e.target.value) >= 0 && parseInt(e.target.value) < 60) {
      props.onChange(props.hours, parseInt(e.target.value))
    }
  }

  return (
    <div className={'input input_duration' + props.className}>
      <span id='duration'>{props.fieldName}:</span>
      <input id='h' name='h' type='number' min='0' max='24' onChange={onHoursChange} value={props.hours} />
      <label htmlFor='h'>h</label>
      <input id='m' name='m' type='number' min='0' max='59' onChange={onMinutesChange} value={props.minutes}  />
      <label htmlFor='m'>m</label>
    </div>
  );
}

DurationInput.defaultProps = {
  hours: '0',
  minutes: '',
  fieldName: 'Duration',
  onChange: () => {},
  disabled: false,
  className: ''
};
