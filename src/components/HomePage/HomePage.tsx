import React from 'react';
import '../../styles/Page.scss';
import { Link } from 'react-router-dom';

export const HomePage = () => (
  <div className="Page">
    <div className="Page__image">{}</div>
    <div className="Page__wrapper">
      <h1 className="Page__title">Who wants to be a millionaire?</h1>
      <Link
        className="Page__button"
        to="/questions/1"
      >
        Start
      </Link>
    </div>
  </div>
);
