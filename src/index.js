import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import './index.html';

const Template = () => (
    <div className="container">
        <div className="h1">React JS Starter Project</div>
        <p>Font Awesome Icon <i className="fa fa-snowflake-o"></i></p>
    </div>
);

ReactDOM.render(<Template/>, document.getElementById('app'));