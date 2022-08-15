import * as React from 'react';

export function QuantityInput(props) {
  function onQuantityChange(e) {
    const regex = new RegExp('^[0-9]{0,7}([.,][0-9]{0,3})?$');
    const quantity_is_correct = regex.test(e.target.value);
    if (quantity_is_correct) {
      props.onChange(e.target.value);
    }
  }
  return (
    <div className='form-inline'>
      <label className='text-nowrap' htmlFor={props.fieldName + '_id'}>
        {`${props.fieldName}:`}
      </label>
      <input
        className='form-control mx-1'
        type='text'
        id={props.fieldName + '_id'}
        value={props.quantity}
        onChange={onQuantityChange}
        title='Число, не більше 3 цифр після коми.'
        disabled={props.disabled}
      />
      <If condition={props.measurement}>
        <span>{props.measurement}</span>
      </If>
    </div>
  );
}

QuantityInput.defaultProps = {
  quantity: null,
  fieldName: '-',
  measurement: '',
  onChange: () => {},
  disabled: false,
  className: {}
};
