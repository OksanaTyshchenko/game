import React from 'react';
import '../../styles/Page.scss';
import './TotalScore.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from '../../store';

export const TotalScore = () => {
  const score = useSelector(selectors.getScore);
  const dispatch = useDispatch();

  return (
    <div className="TotalScore">
      <div className="Page__image">{}</div>
      <div className="Page__wrapper">
        <p className="TotalScore__header">Total score:</p>
        <h1 className="Page__title">{`$${score.toLocaleString()} earned`}</h1>
        <Link
          className="Page__button"
          to="/"
          onClick={() => dispatch(actions.updateScore(0))}
        >
          Try again
        </Link>
      </div>
    </div>
  );
};
