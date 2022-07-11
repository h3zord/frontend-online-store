const EVALUATION_KEY = 'evaluation_data';

if (!JSON.parse(localStorage.getItem(EVALUATION_KEY))) {
  localStorage.setItem(EVALUATION_KEY, JSON.stringify([]));
}

export const saveEvaluations = (evaluations) => localStorage
  .setItem(EVALUATION_KEY, JSON.stringify(evaluations));

export const getEvaluations = () => JSON.parse(localStorage.getItem(EVALUATION_KEY));

export const addEvaluation = (evaluation) => {
  if (evaluation) {
    const savedEvaluations = getEvaluations();
    saveEvaluations([...savedEvaluations, evaluation]);
  }
};
