//import "./assets/redux/quiz";
// import { useNavigate } from "react-router-dom";
import { useQuiz, startQuiz } from "./redux/quiz";
import ResultPage from "./ResultPage";
import QuizPage from "./QuizPage";

export default function HomePage() {
  // const navigate = useNavigate();
  const { quizStarted, showResult } = useQuiz();

  function renderPart() {
    // navigate("/QuizPage");
    if (showResult) {
      return <ResultPage />;
    } else if (quizStarted) {
      return <QuizPage />;
    } else {
      return (
        <div>
          <h2 className="flex justify-center text-3xl font-bold mt-40 hover:text-red-700">
            Welcome back!
          </h2>
        </div>
      );
    }
  }
  return <div>{renderPart()}</div>;
}
