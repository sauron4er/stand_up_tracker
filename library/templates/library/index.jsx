import React from 'react';
import {createRoot} from 'react-dom/client';
import Library from './library';

function LibraryApp() {
  const div = document.getElementById('bundle');

  return (
    <React.StrictMode>
      <Choose>
        <When condition={div.dataset.name === 'library'}>
          <Library />
        </When>
      </Choose>
    </React.StrictMode>
  );
}

const container = document.getElementById('bundle');
const root = createRoot(container);
root.render(<LibraryApp />);
