import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/app';
import core from './../core';

core().then((r) => {
    ReactDOM.render(r, document.getElementById('app'));
})