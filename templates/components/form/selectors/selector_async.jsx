import * as React from 'react';
import AsyncSelect from 'react-select/async';
import useSetState from 'templates/hooks/useSetState';
import {axiosPostRequest} from 'templates/components/axios_requests';
import {notify} from 'templates/components/react_toastify_settings';
import 'css/inputs.css'

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
    <div className={'css_full_width ' + props.className}>
      <If condition={props.fieldName}>
        <label className='mr-md-2' htmlFor={props.selectId}>
          {props.fieldName}:
        </label>
      </If>
      <AsyncSelect
        defaultOptions
        loadOptions={loadOptions}
        onChange={props.onChange}
        isDisabled={props.disabled}
        value={props.value}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id}
        autoFocus={props.autofocus}
        className="react-select-container"
        classNamePrefix="react-select"
      />
      <div style={getUnderscoreStyle()}> </div>
    </div>
  );
}

SelectorAsync.defaultProps = {
  className: '',
  url: '',
  fieldName: '',
  valueField: 'name',
  selectedName: '',
  onChange: () => {},
  disabled: false,
  classes: {},
  value: {id: 0, name: ''},
  selectId: 'select',
  color: false, // При true показує справа від селекта колір обраного об'єкта
  autofocus: false
};
