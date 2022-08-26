import React from 'react';
import {createRoot} from 'react-dom/client';
import Calendar from './calendar';

function CalendarApp() {
  const div = document.getElementById('bundle');

  return (
    <React.StrictMode>
      <Choose>
        <When condition={div.dataset.name === 'calendar'}>
          <Calendar />
        </When>
      </Choose>
    </React.StrictMode>
  );
}

const container = document.getElementById('bundle');
const root = createRoot(container);
root.render(<CalendarApp />);
