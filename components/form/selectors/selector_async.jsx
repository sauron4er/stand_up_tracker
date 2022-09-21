import * as React from 'react';
import AsyncSelect from 'react-select/async';
import useSetState from 'components/hooks/useSetState';
import {axiosPostRequest} from 'components/axios_requests';
import {notify} from 'components/react_toastify_settings';
import 'static/css/forms/inputs.css';
import 'static/css/forms/react-select.css'

export function SelectorAsync(props) {
  const [state, setState] = useSetState({
    input_value: '',
    list: [],
    selected_id: 0,
    selected_name: '',
    selected_color: ''
  });

  function loadOptions(input_value, callback) {
    let formData = new FormData();
    formData.append('filter', input_value);

    axiosPostRequest(props.url, formData)
      .then((response) => {
        setState({list: response});
        callback(response);
      })
      .catch((error) => notify(error));
  }

  function getUnderscoreStyle() {
    return {borderBottom: `0.25rem solid ${props.color ? props.color : null}`}
  }

  return (
    <div className={`input input_grow_2_cols ${props.className}`}>
      <If condition={props.fieldName}>
        <label className='mr-md-2' htmlFor={props.selectId}>
          {props.fieldName}:
        </label>
      </If>
      <AsyncSelect
        defaultOptions
        loadOptions={loadOptions}
        id={props.selectId}
        onChange={props.onChange}
        isDisabled={props.disabled}
        value={props.value}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id}
        autoFocus={props.autofocus}
        className="react-select-container"
        classNamePrefix="react-select"
        theme={(theme) => ({
          ...theme,
          // borderRadius: 0,
          colors: {
            ...theme.colors,
            neutral0: props.mainColor,
            primary25: 'var(--color4)',
            primary: 'var(--color4)',
          },
        })}
        styles={{
          control: (control, state) => ({
            ...control,
            outline: state.isFocused ? '2px solid var(--color3)' : "none"
          })
        }}
      />
      <div style={getUnderscoreStyle()}> </div>
    </div>
  );
}

SelectorAsync.defaultProps = {
  className: '',
  url: '',
  fieldName: '',
  onChange: () => {},
  disabled: false,
  value: {id: 0, name: ''},
  selectId: 'select',
  color: false, // If true - shows color of selected object
  autofocus: false,
  mainColor: 'var(--color5)'
};
