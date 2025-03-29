import s from "./Options.module.css";
const Options = ({ updateFeedback, handleResetFeedbacks, totalFeedback }) => {
  return (
    <ul className={s.wrapper}>
      <li>
        <button className={s.button} onClick={() => updateFeedback("good")}>
          Good
        </button>
      </li>
      <li>
        <button className={s.button} onClick={() => updateFeedback("neutral")}>
          Neutral
        </button>
      </li>
      <li>
        <button className={s.button} onClick={() => updateFeedback("bad")}>
          Bad
        </button>
      </li>
      {totalFeedback > 0 && (
        <li>
          <button className={s.button} onClick={handleResetFeedbacks}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};
export default Options;
