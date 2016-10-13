import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';
import Navbar from './Navbar.js';

import style from "./app.scss";

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (<div className = {style.app}>
            <Navbar />
            <Header />
            <Content />
            <Footer />
            </div>);
    }
}

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(<App />,
    document.getElementById('content')
);
