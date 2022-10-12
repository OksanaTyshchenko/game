import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Question, Answer } from '../../types/Question';
import './QuestionInfo.scss';
import { MoneyScore } from '../MoneyScore/MoneyScore';
import { actions, selectors } from '../../store';

type Props = {
  question: Question;
};

const letters = ['A:', 'B:', 'C:', 'D:'];

export const QuestionInfo: React.FC<Props> = ({ question }) => {
  const history = useHistory();
  const [selected, setSelected] = useState<Answer | null>(null);
  const [condition, setCondition] = useState<number>(1);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const score = useSelector(selectors.getScore);
  const dispatch = useDispatch();

  useEffect(() => {
    setSelected(null);
    setCondition(1);
  }, [question]);

  const handleAnswer = (item: Answer) => {
    setSelected(item);
    setCondition(2);
    setTimeout(() => setCondition(3), 1000);

    setTimeout(() => {
      if (question.id === 12) {
        history.push('/total');
        if (item.corect) {
          dispatch(actions.updateScore(score * 2));
        }

        return;
      }

      history.push(item.corect ? `/questions/${question.id + 1}` : '/total');
    }, 2000);

    if (!item.corect) {
      return;
    }

    switch (score) {
      case 0:
        dispatch(actions.updateScore(500));
        break;

      case 64000:
        dispatch(actions.updateScore(score * 2 - 3000));
        break;

      default:
        dispatch(actions.updateScore(score * 2));
    }
  };

  return (
    <div className="QuestionInfo">
      <div className="QuestionInfo__main">
        <div className="QuestionInfo__menuWrapper">
          <button
            className={classNames('QuestionInfo__menu', {
              QuestionInfo__menuClose: openMenu,
            })}
            type="button"
            onClick={() => setOpenMenu(!openMenu)}
          >
          </button>
        </div>
        <h1 className="QuestionInfo__title">{question.question}</h1>
        <div className="QuestionInfo__buttonsWrapper">
          {question.answers.map((item, index) => {
            return (
              <button
                type="button"
                className={classNames('QuestionInfo__button', {
                  QuestionInfo__selected: item === selected && condition === 2,
                  QuestionInfo__correct: item === selected && item.corect && condition === 3,
                  QuestionInfo__wrong: item === selected && !item.corect && condition === 3,
                })}
                onClick={() => {
                  handleAnswer(item);
                }}
                key={item.answer}
              >
                <span className="QuestionInfo__letter">{letters[index]}</span>
                {item.answer}
              </button>
            );
          })}
        </div>
      </div>
      <div className={classNames('QuestionInfo__sidebar', {
        QuestionInfo__sidebarMenu: openMenu,
      })}
      >
        <div className="QuestionInfo__menuWrapper">
          <button
            className={classNames('QuestionInfo__menu', {
              QuestionInfo__menuClose: openMenu,
            })}
            type="button"
            onClick={() => setOpenMenu(!openMenu)}
          >
          </button>
        </div>
        <MoneyScore />
      </div>
    </div>
  );
};
