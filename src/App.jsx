import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [opt, setOpt] = useState(() => {
    const savedOpt = localStorage.getItem("options");
    return savedOpt ? JSON.parse(savedOpt) : { good: 0, neutral: 0, bad: 0 };
  });
  useEffect(() => {
    localStorage.setItem("options", JSON.stringify(opt));
  }, [opt]);

  const updateFeedback = (feedbackType) => {
    setOpt((prevOpt) => ({
      ...prevOpt,
      [feedbackType]: prevOpt[feedbackType] + 1,
    }));
  };
  const totalFeedback = opt.bad + opt.good + opt.neutral;
  const positiveFeedback = Math.round((opt.good / totalFeedback) * 100);
  const handleResetFeedbacks = () => {
    setOpt({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        handleResetFeedbacks={handleResetFeedbacks}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          optionsAmount={opt}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
