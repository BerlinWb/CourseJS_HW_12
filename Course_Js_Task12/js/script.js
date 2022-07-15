"use strict";

let birthYear = prompt('What year were you born?');
let city = prompt("What city do you live in?");
let sport = prompt("What is your favorite sport?");

let resultCity = null;
let resultSport = null;
let resultbirthYear = null;

let age = 2022 - birthYear;

let cancel = null;


resultCity = (city === "Kiev") ? 'Kyiv is the capital of Ukraine' :
  (city === "Moscow") ? 'Moscow is the capital of Russia' :
    (city === "Minsk") ? 'Minsk is the capital of Belarus' :
      `${city}`;
  
resultSport = (sport === "football") ? "football - Cool! Do you want to be like Ronaldo?" :
  (sport === "Hockey") ? "Hockey - Cool! Do you want to be Patrick Kane?" :
    (sport === "F1") ? "F1 - Cool! Do you want to be Schumacher?" :
        `${sport} Сool choice!`;


cancel = (birthYear === null || birthYear === '') ? alert('You canceled the age') :
  (city === null) ? alert('You canceled the city') :
    (sport === null) ?  alert('You canceled the sport') :
        alert(`Your age - ${age}: Your city - ${resultCity}: Your favorit sport - ${resultSport} `);
