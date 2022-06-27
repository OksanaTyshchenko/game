export type Question = {
  id: number;
  question: string,
  answers: Answer[],
};

export type Answer = {
  corect: boolean,
  answer: string,
};
