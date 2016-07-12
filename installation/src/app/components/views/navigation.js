import React from 'react';
import { Link } from 'react-router';

export default function(props){
  return (
    <nav className="primary-aside">
      <ul>
        <li><Link to="/" activeClassName="active">Home</Link></li>
        <li><Link to="/page-1" activeClassName="active">Page 1</Link></li>
        <li><Link to="/page-2" activeClassName="active">Page 2</Link></li>
      </ul>
    </nav>
  );
}
