import { useState } from "react";
import { useQuiz, updateQuestion, deleteQuestion } from "./redux/quiz";

export default function QuestionsPage() {
  const { questions } = useQuiz();
  const [updateQuestionId, setUpdateQuestionId] = useState();
  const [title, setTitle] = useState();
  const [alt1, setAlt1] = useState();
  const [alt2, setAlt2] = useState();
  const [alt3, setAlt3] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();

  return (
    <ol className="flex flex-wrap gap-8">
      {questions.map((question) => (
        <>
          {updateQuestionId === question.id ? (
            <li
              className="flex flex-col border border-white mt-4 ml-4 p-4 w-[45%] bg-slate-400 space-y-2 text-black"
              key={question.id}
            >
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                value={title}
                placeholder={"Write your question here:"}
              />
              <input
                onChange={(e) => setAlt1(e.target.value)}
                type="text"
                value={alt2}
                placeholder={"Answer 1"}
              />
              <input
                onChange={(e) => setAlt2(e.target.value)}
                type="text"
                value={alt2}
                placeholder={"Answer 2"}
              />
              <input
                onChange={(e) => setAlt3(e.target.value)}
                type="text"
                value={alt3}
                placeholder={"Answer 3"}
              />
              <input
                onChange={(e) => setCorrectAnswer(e.target.value)}
                type="number"
                value={correctAnswer}
                placeholder={"The number of the correct answer"}
              />
              <button
                className="border border-white text-white py-2 px-4 mt-2 mr-2 cursor-pointer bg-slate-400 hover:bg-green-500 transition ease-in-out duration-150 rounded-full"
                onClick={() => {
                  const updatedQuestion = {
                    id: updateQuestionId,
                    title: title,
                    alt1: alt1,
                    alt2: alt2,
                    alt3: alt3,
                    correctAnswer: correctAnswer,
                  };
                  updateQuestion(updatedQuestion);
                  setUpdateQuestionId(null);
                }}
              >
                Save changes
              </button>
            </li>
          ) : (
            <div className="pl-10 pt-6" key={question.id}>
              <li className="list-decimal text-base">
                {question.title}
                <br />- {question.alt1}
                <br />- {question.alt2}
                <br />- {question.alt3}
                <br />
                Correct answer: {question.correctAnswer}
                <br />
                <button
                  className="border border-white py-2 px-4 mt-2 mr-2 cursor-pointer bg-green-700 hover:bg-green-500 transition ease-in-out duration-150 rounded-full"
                  onClick={() => {
                    setUpdateQuestionId(question.id);
                    setTitle(question.title);
                    setAlt1(question.alt1);
                    setAlt2(question.alt2);
                    setAlt3(question.alt3);
                    setCorrectAnswer(question.correctAnswer);
                  }}
                >
                  Edit
                </button>
                <button
                  className="border border-white py-2 px-4 mt-2 mr-2 cursor-pointer bg-white hover:bg-green-400 transition ease-in-out duration-150 rounded-full"
                  onClick={() => deleteQuestion(question.id)}
                >
                  Delete
                </button>
              </li>
            </div>
          )}
        </>
      ))}
    </ol>
  );
}
