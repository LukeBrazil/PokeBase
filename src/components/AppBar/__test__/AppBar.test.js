import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '../AppBar';

it('renders to page', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppBar />, div)
});