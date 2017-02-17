import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';

import style from './app.scss';

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
