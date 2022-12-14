import React from 'react';
import useSetState from 'components/hooks/useSetState';
import 'static/css/sidebar.css';

function SideBar() {
  const [state, setState] = useSetState({
    menu_opened: window.innerWidth > 1250,
    pathname: window.location.pathname.replace(/^\/|\/$/g, '')
  });

  function onMenuButtonClick() {
    setState({menu_opened: !state.menu_opened});
  }

  function onSearchButtonClick() {
    if (!state.menu_opened) setState({menu_opened: true});
  }

  return (
    <div className={`sidebar ${state.menu_opened ? 'active' : ''}`}>
      <div className='logo_content'>
        <div className='logo'>
          <i className='bx bxs-microphone' />
          <div className='logo_name'>StandUp Tracker</div>
        </div>
        <i className='bx bx-menu' id='btn' onClick={onMenuButtonClick} />
      </div>
      <ul className='nav_list'>
        <li>
          <a href='#'>
            <i className='bx bx-search-alt-2' onClick={onSearchButtonClick} />
          </a>
          <input className='search-input' type='text' placeholder='Search...' />
          <span className='tooltip'>Search</span>
        </li>
        <li className='soon'>
          <a href='' className={state.pathname === 'my_specials' ? 'active' : null}>
          {/*<a href={`${window.location.origin}/my_specials/`} className={state.pathname === 'my_specials' ? 'active' : null}>*/}
            <i className='bx bx-play-circle' />
            <span className='links_name'>My Specials</span>
          </a>
        </li>
        <li className='soon'>
          <a href='' className={state.pathname === 'my_calendar' ? 'active' : null}>
          {/*<a href={`${window.location.origin}/my_calendar/`} className={state.pathname === 'my_calendar' ? 'active' : null}>*/}
            <i className='bx bxs-calendar' />
            <span className='links_name'>Calendar</span>
          </a>
          <span className='tooltip'>Calendar</span>
        </li>
        <li>
          <a href={`${window.location.origin}/library/`} className={state.pathname === 'library' ? 'active' : null}>
            <i className='bx bx-library' />
            <span className='links_name'>Library</span>
          </a>
          <span className='tooltip'>Library</span>
        </li>
        <li>
          <a href={`${window.location.origin}/profile/`} className={state.pathname === 'profile' ? 'active' : null}>
            <i className='bx bx-glasses-alt' />
            <span className='links_name'>Profile</span>
          </a>
          <span className='tooltip'>Profile</span>
        </li>
        <li>
          <a href={`${window.location.origin}/subscribe`} className={state.pathname === 'subscribe' ? 'active' : null}>
            <i className='bx bx-cart-add' />
            <span className='links_name'>Subscribe</span>
          </a>
          <span className='tooltip'>Subscribe</span>
        </li>
        <li>
          <a href={`${window.location.origin}/contact_us`} className={state.pathname === 'contact_us' ? 'active' : null}>
            <i className='bx bx-message-alt-detail' />
            <span className='links_name'>Contact Us</span>
          </a>
          <span className='tooltip'>Contact Us</span>
        </li>
        {/*<li>*/}
        {/*  <a href='#'>*/}
        {/*    <i className='bx bx-cog' />*/}
        {/*    <span className='links_name'>Settings</span>*/}
        {/*  </a>*/}
        {/*  <span className='tooltip'>Settings</span>*/}
        {/*</li>*/}
      </ul>
      <div className='profile_content'>
        <div className='profile'>
          <div className='profile_details'>
            {/*<img src='' alt='' />*/}
            <div className='name_job'>
              <div className='name'>Stas</div>
              <div className='job'>Khramtsov</div>
            </div>
          </div>
          <i className='bx bx-log-out' id='log_out' />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
