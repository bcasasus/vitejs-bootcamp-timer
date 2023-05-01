import './styles.css';

interface ProgressBarStructure {
  percentComplete: number;
  className?: string;
}

function ProgressBar({
  percentComplete,
  progressBar,
}: ProgressBarStructure): JSX.Element {
  return (
    <div className="progress">
      <div className="progress__info">
        <span className="progress__text">Progress</span>
        <span className="progress__percentage">
          {percentComplete.toFixed(2)}%
        </span>
      </div>
      <div className="bar">
        <div
          className="bar__progress"
          style={{ width: `${progressBar}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
