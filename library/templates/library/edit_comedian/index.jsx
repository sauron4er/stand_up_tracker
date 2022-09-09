import React from 'react';
import {createRoot} from 'react-dom/client';
import EditComedian from './edit_comedian';

const container = document.getElementById('bundle');
const root = createRoot(container);
root.render(<EditComedian />);
