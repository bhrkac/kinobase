import React from 'react';
import ReactDOM from 'react-dom';

const Title = () => {
  return (
    <div className="title">
      <div>kinobase</div>
      <div className="subtitle">
        The place for your film collection.
        </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-item">Search</div>
      <div className="menu-item">Seen (754)</div>
      <div className="menu-item">Want (323)</div>
      <div className="menu-item">Stats</div>
    </div>
  );
};

export { Title, Menu };