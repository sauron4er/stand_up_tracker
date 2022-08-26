import React from 'react';
import {createRoot} from 'react-dom/client';
import ContactUs from './contact_us';
import Subscribe from './subscribe';

function CorporatePagesApp() {
  const div = document.getElementById('bundle');

  return (
    <React.StrictMode>
      <Choose>
        <When condition={div.dataset.name === 'subscribe'}>
          <Subscribe />
        </When>
        <When condition={div.dataset.name === 'contact_us'}>
          <ContactUs />
        </When>
      </Choose>
    </React.StrictMode>
  );
}

const container = document.getElementById('bundle');
const root = createRoot(container);
root.render(<CorporatePagesApp />);
