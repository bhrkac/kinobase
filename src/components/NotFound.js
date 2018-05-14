import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const NotFound = () => (
	<div className="detail">
		<h2>Ooops... Page does not exist</h2>
    <p><Link className="button-back" to="/">Home</Link></p>
	</div>
);

export default NotFound;