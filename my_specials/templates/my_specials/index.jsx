import React from 'react';
import {createRoot} from 'react-dom/client';
import MySpecials from './my_specials';

function MySpecialsApp() {
  const div = document.getElementById('bundle');

  return (
    <React.StrictMode>
      <Choose>
        <When condition={div.dataset.name === 'my_specials'}>
          <MySpecials />
        </When>
      </Choose>
    </React.StrictMode>
  );
}

const container = document.getElementById('bundle');
const root = createRoot(container);
root.render(<MySpecialsApp />);
