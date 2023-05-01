import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import ProgressBar from './components/ProgressBar';
import Header from './components/Header';
import './App.css';
import { getProgressPercentage } from './logic/getProgressPercentage.ts';

const BOOTCAMP_START_DAY = '2023/4/3';
const BOOTCAMP_END_DAY = '2023/6/16';

const bootcampStartDate = new Date(BOOTCAMP_START_DAY);
const bootcampEndDate = new Date(BOOTCAMP_END_DAY);
const today = new Date();
function App() {
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [remainingDays, setRemainingDays] = useState<number>(0);
  const [percentComplete, setPercentComplete] = useState<number>(0);
  const [progressBar, setProgressBar] = useState<number>(0);

  useEffect(() => {
    // Calculate the difference in milliseconds between the two dates
    if (today >= bootcampEndDate) {
      setShowConfetti(true);
    }
    const msDiferenceBetweenBootcampStartAndEnd =
      bootcampEndDate.getTime() - bootcampStartDate.getTime();

    // Convert the difference to days
    const totalDays = Math.floor(
      msDiferenceBetweenBootcampStartAndEnd / (1000 * 60 * 60 * 24)
    );

    const msDiferenceBetweenTodayDatetAndBootcampEndDate =
      bootcampEndDate.getTime() - today.getTime();

    // Convert the difference to days
    const daysCompleted = Math.floor(
      msDiferenceBetweenTodayDatetAndBootcampEndDate / (1000 * 60 * 60 * 24)
    );
    const progress = Math.abs(daysCompleted - totalDays);

    setRemainingDays(daysCompleted);
    const progressPercentage = getProgressPercentage(progress, totalDays);
    setPercentComplete(progressPercentage);

    setTimeout(() => {
      setProgressBar(progressPercentage);
    }, 1000);
  }, []);

  return (
    <>
      <div className="main">
        {showConfetti && <Confetti tweenDuration={1000} />}
        <Header
          remainingDays={remainingDays}
          isCompleted={percentComplete === 100}
        />
        <ProgressBar
          percentComplete={percentComplete}
          progressBar={progressBar}
        />
      </div>
    </>
  );
}

export default App;
