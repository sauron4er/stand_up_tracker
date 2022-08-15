import React from 'react';
import useSetState from 'templates/hooks/useSetState';

export function SideBar() {
  const [state, setState] = useSetState({

  });

  return (
    <div className='bg-white'>
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
              <i className='bx bx-search-alt-2'></i>
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
              <i className='bx bxs-calendar'></i>
              <span className='links_name'>My Calendar</span>
            </a>
            {/*<span className='tooltip'>My Specials</span>*/}
          </li>
          <li>
            <a href='#'>
              <i className='bx bx-library'></i>
              <span className='links_name'>Library</span>
            </a>
            {/*<span className='tooltip'>My Specials</span>*/}
          </li>
          <li>
            <a href='#'>
              <i className='bx bx-cart-add'></i>
              <span className='links_name'>Subscribe</span>
            </a>
            {/*<span className='tooltip'>My Specials</span>*/}
          </li>
          <li>
            <a href='#'>
              <i className='bx bx-message-alt-detail'></i>
              <span className='links_name'>Contact Us</span>
            </a>
            {/*<span className='tooltip'>My Specials</span>*/}
          </li>
        </ul>
      </div>
    </div>
  );
}
