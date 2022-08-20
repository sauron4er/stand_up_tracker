import React, {useEffect} from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';
import {TextInput, SubmitButton, ColorPicker, Password, SelectorAsync} from 'templates/components/form';

import {axiosPostRequest} from 'templates/components/axios_requests';
import settingsState from 'settings/templates/settings/state';

function EditProfile(props) {
  const [state, setState] = useSetState({
    id: 0,
    name: '',
    phone: '',
    address: '',
    note: '',
    color: '',
    login: '',
    password_area_show: false,
    password: '',
    is_password_valid: true,
    theme: 0,
    theme_name: '',
    theme_changed: false, // if true - page "profile" reloads after saving
    done: false
  });

  useEffect(() => {
    if (props.user) {
      setState({...props.user});
    }
  }, [props]);

  function onChange(e, type) {
    setState({[type]: e.target.value});
  }

  function onThemeChange(e) {
    setState({
      theme: e.id,
      theme_name: e.name,
      theme_changed: true
    });
  }

  function changeEmployee() {
    const {id, name, phone, address, note, color, login, password, theme} = state;
    let formData = new FormData();
    formData.append('id', id);
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('note', note);
    formData.append('color', color);
    formData.append('login', login);
    formData.append('password', state.password_area_show ? password : '');
    formData.append('theme', theme);
    postEmployee(formData);
  }

  function deactivateEmployee() {
    const {id, name, phone, address, note, color, login, password, theme} = state;
    let formData = new FormData();
    formData.append('id', id);
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('note', note);
    formData.append('color', color);
    formData.append('login', login);
    formData.append('password', state.password_area_show ? password : '');
    formData.append('theme', theme);
    formData.append('deactivate', '');
    postEmployee(formData);
  }

  function postEmployee(formData) {
    axiosPostRequest('post_employee', formData)
      .then((response) => {
        employeesState.refresh = true;
        props.closeModal();
        if (state.theme_changed) props.reload();
        setState({done: true});
      })
      .catch((error) => notify(error));
  }

  function onPasswordChange(password, is_password_valid) {
    setState({
      password: password,
      is_password_valid
    });
  }

  function togglePasswordArea() {
    setState({
      password_area_show: !state.password_area_show
    });
  }

  return (
    <>profile
      {/*<h5>Редагування</h5>*/}
      {/*<hr />*/}
      {/*<TextInput text={state.name} fieldName='Ім’я' onChange={(e) => onChange(e, 'name')} maxLength={100} />*/}
      {/*<hr />*/}
      {/*<div className='d-flex'>*/}
      {/*  <TextInput className='mr-3' text={state.phone} fieldName='Номер телефону' onChange={(e) => onChange(e, 'phone')} maxLength={10} />*/}
      {/*  <div className='ml-auto'>*/}
      {/*    <ColorPicker color={state.color} fieldName='Колір' onChange={(e) => onChange(e, 'color')} />*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<hr />*/}
      {/*<TextInput text={state.address} fieldName='Адреса' onChange={(e) => onChange(e, 'address')} maxLength={100} />*/}
      {/*<hr />*/}
      {/*<TextInput text={state.note} fieldName='Нотатка' onChange={(e) => onChange(e, 'note')} maxLength={1000} />*/}
      {/*<hr />*/}
      {/*<SelectorAsync*/}
      {/*  className='css_select_in_modal'*/}
      {/*  fieldName='Тема'*/}
      {/*  url='get_themes'*/}
      {/*  onChange={onThemeChange}*/}
      {/*  value={{id: state.theme, name: state.theme_name}}*/}
      {/*/>*/}
      {/*<hr />*/}
      {/*<TextInput text={state.login} fieldName='Логін' onChange={(e) => onChange(e, 'login')} maxLength={110} />*/}
      {/*<small>Лише латинські букви, цифри та символи @, ., +, - або _</small>*/}
      {/*<hr />*/}
      {/*<button className={`btn btn-sm css_button ${state.password_area_show ? 'mb-2' : null}`} onClick={togglePasswordArea}>*/}
      {/*  {state.password_area_show ? 'Не змінювати пароль' : 'Змінити пароль' }*/}
      {/*</button>*/}
      {/*<If condition={state.password_area_show}>*/}
      {/*  <Password password={state.password} onChange={onPasswordChange} />*/}
      {/*</If>*/}
      {/*<hr />*/}
      {/*<div className='d-flex justify-content-between'>*/}
      {/*  <SubmitButton*/}
      {/*    name='change'*/}
      {/*    text='Зберегти'*/}
      {/*    onClick={changeEmployee}*/}
      {/*    disabled={!state.name || !state.login || ( state.password_area_show && !state.is_password_valid)}*/}
      {/*    done={state.done}*/}
      {/*    done_text='Збережено!'*/}
      {/*  />*/}
      {/*  <If condition={props.is_staff}>*/}
      {/*    <SubmitButton*/}
      {/*      name='deactivate'*/}
      {/*      className='css_button_red'*/}
      {/*      text='Видалити'*/}
      {/*      onClick={deactivateEmployee}*/}
      {/*      disabled={!state.name}*/}
      {/*      timeout={3000}*/}
      {/*    />*/}
      {/*  </If>*/}
      {/*</div>*/}
    </>
  );
}

EditProfile.defaultProps = {
  user: {},
  is_staff: false,
  closeModal: () => {},
  reload: () => {}
};

export default view(EditProfile);
