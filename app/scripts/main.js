import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";
import Menu from './components/menu';
import Home from './components/home';
import Routes from './components/Route';


class App extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
    render() {
        return (
            <div className="App">
                <Menu />
                <Home />
                <Routes />
            </div>
        );
    }

}

// Render this out
ReactDOM.render(    
        <App />
    , document.getElementById('root'));
