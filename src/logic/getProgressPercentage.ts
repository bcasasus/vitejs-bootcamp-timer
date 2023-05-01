const getProgressPercentage = (
  currentProgress: number,
  totalProgress: number
): number => {
  const newProgressPercentage = (currentProgress / totalProgress) * 100;
  console.log(currentProgress, totalProgress, newProgressPercentage);
  if (newProgressPercentage >= 100) {
    return 100;
  } else if (newProgressPercentage < 0 || isNaN(newProgressPercentage)) {
    return 100;
  }

  return newProgressPercentage;
};

export { getProgressPercentage };
