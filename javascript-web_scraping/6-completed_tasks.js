#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request(url, (err, response, body) => {
  if (err) {
    console.error(err);
  }

  const allUserTasks = JSON.parse(body);
  const completedByUser = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0
  };
  for (const userTask of allUserTasks) {
    if (userTask.completed === 'true') {
      completedByUser[userTask.userId] += 1;
    }
  }

  console.log(completedByUser);
});
