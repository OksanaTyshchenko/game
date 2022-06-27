import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { QuestionsPage } from './components/QuestionPage/QuestionsPage';
import { TotalScore } from './components/TotalScore/TotalScore';

import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/questions/:questionId">
          <QuestionsPage />
        </Route>

        <Route path="/total" exact>
          <TotalScore />
        </Route>

        <p>Not found page</p>
      </Switch>
    </div>
  );
};
