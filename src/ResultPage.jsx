import { resetQuiz, useQuiz } from "./redux/quiz";

export default function ResultPage() {
  const { score, questions } = useQuiz();
  const QuestionsNumb = questions.length;

  console.log(QuestionsNumb);
  return (
    <div className="bg-slate-400 h-screen w-full text-white pt-20 flex flex-col items-center ">
      <div className="flex flex-col font-bold items-center px-12 pt-10 pb-24 border border-white">
        <h2 className="text-3xl">Result</h2>
        <p className="text-lg mt-8">
          Your score: {score} / {QuestionsNumb} questions!
        </p>
        <button
          className="text-xl border border-white py-4 px-6 mt-16 cursor-pointer bg-green-600 hover:bg-green-800 transition ease-in-out duration-150"
          onClick={() => resetQuiz()}
        >
          Restart!!
        </button>
      </div>
    </div>
  );
}
