import {createRoot} from 'react-dom/client';
import React from 'react';
import SideBar from 'templates/components/sidebar/sidebar';

function SideBarApp() {
  return (<SideBar />);
}

const container = document.getElementById('sidebar');
const root = createRoot(container);
root.render(<SideBarApp />);