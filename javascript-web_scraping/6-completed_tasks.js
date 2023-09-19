#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request(url, (err, response, body) => {
  if (err) {
    console.error(err);
  }

  const ToDoList = JSON.parse(body);
  const doneByUser = {};
  for (const task of ToDoList) {
    const uid = task.userId;
    if (!doneByUser[uid]) {
      doneByUser[uid] = 0;
    }
    if (task.completed === true) {
      doneByUser[uid]++;
    }
  }

  for (const user in doneByUser) {
    if (doneByUser[user] === 0) {
        delete(doneByUser[user]);
    }
  }

  console.log(doneByUser);
});
