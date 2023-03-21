
console.log(document);  //Logs HTML code

//!how to select from html using js

document.querySelector('h1') //looks for first matching element
document.querySelectorAll('h1') //list of all w/ same query/ele

document.getElementById('title')//get all w/ similar id, notice element/elements

document.getElementsByClassName('class')//selects all by class name

//*document.getElementsByTagName('p')[0].textContent = 'pain'
//not gonna bother making that work

//! how to change html using js

//* document.querySelector('p').innerHTML = "<p>AHGASHDG</p>"
// *same as before, innerHTML changes things, can be buggy

//! how to create html using JS

document.createElement('p').textContent = 'but why'
//*created new Element and added text content

let newP = document.createElement('p')
newP.textContent = 'this is a new P tag'

let div = document.querySelector('div')

let ul = document.createElement('ul')

div.append(newP,ul)
//*add's newP to div, .appendChild only appends 1

//---------------------------------

//! how to remove 
div.remove()
//*removes div