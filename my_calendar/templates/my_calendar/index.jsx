import React from 'react';
import {createRoot} from 'react-dom/client';
import MyCalendar from './my_calendar';

function MyCalendarApp() {
  const div = document.getElementById('bundle');

  return (
    <React.StrictMode>
      <Choose>
        <When condition={div.dataset.name === 'calendar'}>
          <MyCalendar />
        </When>
      </Choose>
    </React.StrictMode>
  );
}

const container = document.getElementById('bundle');
const root = createRoot(container);
root.render(<MyCalendarApp />);
