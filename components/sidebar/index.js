import {createRoot} from 'react-dom/client';
import React from 'react';
import SideBar from 'components/sidebar/sidebar';

function SideBarApp() {
  return (<SideBar />);
}

const container = document.getElementById('sidebar');
const root = createRoot(container);
root.render(<SideBarApp />);