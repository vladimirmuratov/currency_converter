import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"

import Header from 'components/header'
import Content from 'components/content'


const App = () => {
    return (
        <>
            <Header/>
            <Content/>
        </>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
