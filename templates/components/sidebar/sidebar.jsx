import React from 'react';
import useSetState from 'templates/hooks/useSetState';
import 'static/css/sidebar.css';

function SideBar() {
  const [state, setState] = useSetState({
    menu_opened: window.innerWidth > 600
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
          <a href={`${window.location.origin}/search`}>
            <i className='bx bx-search-alt-2' onClick={onSearchButtonClick} />
            <input className='search-input' type='text' placeholder='Search...' />
          </a>
          <span className='tooltip'>Search</span>
        </li>
        <li>
          <a href={`${window.location.origin}/my_specials/`}>
            <i className='bx bx-play-circle' />
            <span className='links_name'>My Specials</span>
          </a>
          <span className='tooltip'>My Specials</span>
        </li>
        <li>
          <a href={`${window.location.origin}/calendar/`}>
            <i className='bx bxs-calendar' />
            <span className='links_name'>Calendar</span>
          </a>
          <span className='tooltip'>Calendar</span>
        </li>
        <li>
          <a href={`${window.location.origin}/library/`}>
            <i className='bx bx-library' />
            <span className='links_name'>Comedians</span>
          </a>
          <span className='tooltip'>Comedians</span>
        </li>
        <li>
          <a href={`${window.location.origin}/profile/`}>
            <i className='bx bx-glasses-alt'></i>
            <span className='links_name'>Profile</span>
          </a>
          <span className='tooltip'>Profile</span>
        </li>
        <li>
          <a href={`${window.location.origin}/subscribe`}>
            <i className='bx bx-cart-add' />
            <span className='links_name'>Subscribe</span>
          </a>
          <span className='tooltip'>Subscribe</span>
        </li>
        <li>
          <a href={`${window.location.origin}/contact_us`}>
            <i className='bx bx-message-alt-detail' />
            <span className='links_name'>Contact Us</span>
          </a>
          <span className='tooltip'>Contact Us</span>
        </li>
        <li>
          <a href={`${window.location.origin}/settings`}>
            <i className='bx bx-cog' />
            <span className='links_name'>Settings</span>
          </a>
          <span className='tooltip'>Settings</span>
        </li>
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
