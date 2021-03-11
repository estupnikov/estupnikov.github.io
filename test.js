// Вариант 1.
var elems = document.querySelector('form');
for(var i = 0; i < elems.length; i++) console.log(elems[i]);

// Вариант 2.
var elems = document.querySelectorAll('form');
for(var i of elems) console.log(i);

// Вариант 3.
var elems = document.getElementsByTagName('form');
for(var i in elems) console.log(elems[i]);

// Вариант 4.
var elems = document.forms;
for(var i = 0; i < elems.length; i++) console.log(elems[i]);