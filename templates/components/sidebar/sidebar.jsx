import React from 'react';
import useSetState from 'templates/hooks/useSetState';
import 'static/css/sidebar.css';

export function SideBar() {
  const [state, setState] = useSetState({});

  return (
    <div className='sidebar'>
      <div className='logo_content'>
        <div className='logo'>
          <i className='bx bxs-microphone' />
          <div className='logo_name'>StandUp Tracker</div>
        </div>
        <i className='bx bx-menu' id='btn' />
      </div>
      <ul className='nav_list'>
        <li>
          <a href='#'>
            <i className='bx bx-search-alt-2' />
            <input type='text' placeholder='Search...' />
          </a>
          {/*<span className='tooltip'>My Specials</span>*/}
        </li>
        <li>
          <a href='#'>
            <i className='bx bx-play-circle' />
            <span className='links_name'>My Specials</span>
          </a>
          {/*<span className='tooltip'>My Specials</span>*/}
        </li>
        <li>
          <a href='#'>
            <i className='bx bxs-calendar' />
            <span className='links_name'>My Calendar</span>
          </a>
          {/*<span className='tooltip'>My Specials</span>*/}
        </li>
        <li>
          <a href='#'>
            <i className='bx bx-library' />
            <span className='links_name'>Library</span>
          </a>
          {/*<span className='tooltip'>My Specials</span>*/}
        </li>
        <li>
          <a href='#'>
            <i className='bx bx-cart-add' />
            <span className='links_name'>Subscribe</span>
          </a>
          {/*<span className='tooltip'>My Specials</span>*/}
        </li>
        <li>
          <a href='#'>
            <i className='bx bx-message-alt-detail' />
            <span className='links_name'>Contact Us</span>
          </a>
          {/*<span className='tooltip'>My Specials</span>*/}
        </li>
      </ul>
      <div className='profile_content'>
        <div className='profile'>
          <div className='profile_details'>
            {/*<img src='' alt='' />*/}
            <div className='name_job'>
              <div className='name'>Stas</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
