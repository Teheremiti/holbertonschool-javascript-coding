#!/usr/bin/node
const id = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/' + id;
const request = require('request');

request(url, (err, response, body) => {
  if (err) {
    console.error(err);
  }
  const movie = JSON.parse(body);
  console.log(movie.title);
});
