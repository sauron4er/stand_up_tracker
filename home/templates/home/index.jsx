import React from 'react';
import {createRoot} from 'react-dom/client';
import Home from './home';

function HomeApp() {
  const div = document.getElementById('bundle');

  return (
    <React.StrictMode>
      <Choose>
        <When condition={div.dataset.name === 'home'}>
          <Home />
        </When>
      </Choose>
    </React.StrictMode>
  );
}

const container = document.getElementById('bundle');
const root = createRoot(container);
root.render(<HomeApp />);
