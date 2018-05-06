import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const NotFound = () => (
	<div>
		<h2>Page does not exist</h2>
    <p><Link className="button-back" to="/">Home</Link></p>
	</div>
);

export default NotFound;