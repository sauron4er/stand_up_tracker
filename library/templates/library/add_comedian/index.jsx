import React from 'react';
import {createRoot} from 'react-dom/client';
import AddComedian from 'library/templates/library/add_comedian/add_comedian';

const container = document.getElementById('bundle');
const root = createRoot(container);
root.render(<AddComedian />);
