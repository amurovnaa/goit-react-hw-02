const Feedback = ({ optionsAmount, positiveFeedback, totalFeedback }) => {
  return (
    <ul>
      <li>Good: {optionsAmount.good}</li>
      <li>Neutral: {optionsAmount.neutral}</li>
      <li>Bad: {optionsAmount.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
};
export default Feedback;
