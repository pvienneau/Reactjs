import React from 'react';
import Navigation from '../views/navigation';

export default function(props) {
  return (
    <div className="app">
      <header className="primary-header"></header>
      <Navigation/>
      <main>
        {props.children}
      </main>
    </div>
  );
}
