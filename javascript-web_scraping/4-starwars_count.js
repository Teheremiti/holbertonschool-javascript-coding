#!/usr/bin/node
const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/people/18/';

request(url, (err, response, body) => {
  if (err) {
    console.error(err);
  }
  const character = JSON.parse(body);
  const appearancesCount = character.films.length();
  console.log(appearancesCount);
});
