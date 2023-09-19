#!/usr/bin/node
const id = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/' + id;
const request = require('request');

request(url, (err, movie) => {
  if (err) {
    console.error(err);
  }
  console.log(movie.title);
});
