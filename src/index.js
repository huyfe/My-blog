import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// Import components
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import Article from './Article';
import Aside from './Aside';

import reportWebVitals from './reportWebVitals';

ReactDOM.render( <Header/>, document.getElementById('header'));
ReactDOM.render( <Banner/>, document.getElementById('banner'));
ReactDOM.render( <Footer/>, document.getElementById('footer'));
ReactDOM.render( <Article/>, document.getElementById('root'));
ReactDOM.render( <Aside/>, document.getElementById('aside'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
