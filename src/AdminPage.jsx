import { useState } from "react";
import QuestionsPage from "./QuestionsPage";
// import UpdateQuestion from "./UpdateQuestion";
import { useQuiz, addQuestion } from "./redux/quiz";

function AdminPage() {
  const [title, setTitle] = useState();
  const [alt1, setAlt1] = useState();
  const [alt2, setAlt2] = useState();
  const [alt3, setAlt3] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();

  const { questions } = useQuiz();

  function createQuiz() {
    const question = {
      title: title,
      alt1: alt1,
      alt2: alt2,
      alt3: alt3,
      correctAnswer: correctAnswer,
      id: questions.length + 1,
    };
    addQuestion(question);
  }

  return (
    <div className="bg-slate-300 py-14 px-20 h-full w-full text-black">
      <div className="pl-8">
        <h1 className="text-2xl">ADMIN</h1>
        <p className="py-4 font-semibold">Write your own question here:</p>
      </div>
      <div className="flex flex-col border-4 border-white p-12 bg-slate-300 space-y-4">
        <input
          className="text-sky-900 px-2 p-2"
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder={"Din fråga"}
        />

        <input
          className="text-sky-900 px-2 p-2"
          onChange={(e) => setAlt1(e.target.value)}
          type="text"
          placeholder={"Answer 1"}
        />
        <input
          className="text-sky-900 px-2 p-2"
          onChange={(e) => setAlt2(e.target.value)}
          type="text"
          placeholder={"Answer 2"}
        />
        <input
          className="text-sky-900 px-2 p-2"
          onChange={(e) => setAlt3(e.target.value)}
          type="text"
          placeholder={"Answer 3"}
        />
        <input
          className="text-sky-900 px-2 p-2"
          onChange={(e) => setCorrectAnswer(e.target.value)}
          type="number"
          placeholder={"Numret på rätta svaret"}
        />

        <button
          className="text-lg border border-white py-2 px-6  mt-16 cursor-pointer bg-green-400 hover:bg-green-800 transition ease-in-out duration-150 rounded-full"
          onClick={createQuiz}
        >
          Save the question!
        </button>
      </div>
      <p className="text-xl py-8 pl-8">Current Question: </p>

      <QuestionsPage />
    </div>
  );
}

export default AdminPage;
