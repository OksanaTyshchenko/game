import React from 'react';
import { useSelector } from 'react-redux';
import money from '../../money.json';
import { selectors } from '../../store';
import './MoneyScore.scss';

export const MoneyScore = () => {
  const score = useSelector(selectors.getScore);

  return (
    <ul className="MoneyScore">
      {money.map(sum => (
        <li
          key={sum}
          className={score >= sum ? 'MoneyScore__sum inactive' : 'MoneyScore__sum'}
        >
          {`$${sum.toLocaleString()}`}
        </li>
      ))}
    </ul>
  );
};
