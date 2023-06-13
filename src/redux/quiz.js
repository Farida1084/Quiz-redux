import { createReduxModule } from "hooks-for-redux";

// const question = { id: 2, question: "Hur mår du?" };

const initialStateQuestion = {
  quizStarted: true,
  showResult: false,
  currentQuestion: 0,
  score: 0,
  questions: [
    {
      title: "Vilket datum är Sveriges nationaldag",
      alt1: "6 juni",
      alt2: "1 december",
      alt3: "13 mars",
      correctAnswer: 1,
      id: 1,
    },
    {
      title: "Vad heter Ghanas huvudstaden ?",
      alt1: "Takoradi",
      alt2: "Accra",
      alt3: "Tema",
      correctAnswer: 2,
      id: 2,
    },
    {
      title: "Vid vilken ålder får man köpa alkohol i Sverige?",
      alt1: "18",
      alt2: "21",
      alt3: "20",
      correctAnswer: 3,
      id: 2,
    },
  ],
};

export const [
  useQuiz,
  {
    addQuestion,
    deleteQuestion,
    updateQuestion,
    startQuiz,
    answerQuestion,
    resetQuiz,
  },
] = createReduxModule("quiz", initialStateQuestion, {
  addQuestion: (state, question) => {
    const oldQuestion = state.questions;
    const newQuestion = [...oldQuestion, question];
    return { ...state, questions: newQuestion };
  },
  deleteQuestion: (state, ObjectID) => {
    return {
      ...state,
      questions: state.questions.filter((question) => question.id !== ObjectID),
    };
  },
  updateQuestion: (state, updatedQuestion) => {
    return {
      ...state,
      questions: state.questions.map((question) => {
        if (question.id == updatedQuestion.id) {
          return updatedQuestion;
        }
        return question;
      }),
    };
  },
  startQuiz: (state) => {
    return {
      ...state,
      quizStarted: true,
      showResult: false,
      currentQuestion: 0,
      score: 0,
    };
  },
  answerQuestion: (state, answer) => {
    const score =
      state.score +
      (answer === state.questions[state.currentQuestion]?.correctAnswer
        ? 1
        : 0);
    if (state.currentQuestion === state.questions.length - 1) {
      return {
        ...state,
        score,
        showResult: true,
        quizStarted: false,
      };
    } else {
      return {
        ...state,
        score,
        currentQuestion: state.currentQuestion + 1,
      };
    }
  },
  resetQuiz: (state) => {
    return {
      ...state,
      quizStarted: false,
      showResult: false,
      currentQuestion: 0,
      score: 0,
    };
  },
});
