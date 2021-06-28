import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './components/Navbar';

const App = () => {
    return (
        <MainNav />
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById('app')
);