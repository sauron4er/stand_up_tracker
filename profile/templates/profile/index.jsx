import React from 'react';
import {createRoot} from 'react-dom/client';
import Profile from './profile';

function ProfileApp() {
  const div = document.getElementById('bundle');

  return (
    <>
      <Choose>
        <When condition={div.dataset.name === 'profile'}>
          <Profile />
        </When>
      </Choose>
    </>
  );
}

const container = document.getElementById('bundle');
const root = createRoot(container);
root.render(<ProfileApp />);
