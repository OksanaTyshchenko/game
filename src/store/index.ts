import { legacy_createStore as createStore, AnyAction } from 'redux';

const UPDATE_SCORE = 'UPDATE_SCORE';

export const actions = {
  updateScore: (score: number) => ({
    type: UPDATE_SCORE,
    score,
  }),
};

export const selectors = {
  getScore: (state: RootState) => state.score,
};

type RootState = {
  score: number;
};

const initialState: RootState = {
  score: 0,
};

const rootReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case UPDATE_SCORE:
      return {
        ...state,
        score: action.score,
      };

    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
