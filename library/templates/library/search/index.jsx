import React from 'react';
import {createRoot} from 'react-dom/client';
import Search from './search';

function SearchApp() {
  const div = document.getElementById('bundle');

  return (
    <>
      <Choose>
        <When condition={div.dataset.name === 'search'}>
          <Search />
        </When>
      </Choose>
    </>
  );
}

const container = document.getElementById('bundle');
const root = createRoot(container);
root.render(<SearchApp />);
