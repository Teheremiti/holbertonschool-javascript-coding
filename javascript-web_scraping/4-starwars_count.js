#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request(url, (err, response, body) => {
  if (err) {
    console.error(err);
  }

  let appearancesCount = 0
  const movies = JSON.parse(body).results;
  for (const movie of movies) {
    if (movie.characters.includes('https://swapi-api.hbtn.io/api/people/18/')) {
      count++;
    }
  }
  console.log(appearancesCount);
});
