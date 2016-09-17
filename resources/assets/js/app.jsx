import Layout from './layout.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

const element = document.getElementById('root');

ReactDOM.render(<Router history={browserHistory}>
	<Route path="/" component={Layout} />
</Router>, element);