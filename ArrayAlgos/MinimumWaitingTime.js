const minimumWaitingTime = (queries) => {
  let minWaitTime = 0;
  let lastNum = 0;
  queries.sort((a, b) => a - b);

  for (let i = 0; i < queries.length; i++) {
    minWaitTime += lastNum;
    lastNum += queries[i];
  }

  return minWaitTime;
};
