import React from 'react';
import { useParams } from 'react-router-dom';
import questions from '../../questions.json';
import { QuestionInfo } from '../QuestionInfo/QuestionInfo';

export const QuestionsPage = () => {
  const { questionId } = useParams<{questionId: string}>();
  const findQuestion = questions.find(el => el.id === +questionId);

  return (
    <>
      {findQuestion && <QuestionInfo question={findQuestion} />}
    </>
  );
};
