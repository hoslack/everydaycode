/* ARGUMENTS SHOULD NOT BE MUTATED */

/*
Write a function which, if the introduction paragraph has the class "highlight",
it will be removed; otherwise the class "highlight" is added.
*/
var toggleHighlight = function(){

var intro = document.getElementsByClassName('introduction');

intro[0].classList.toggle('highlight');
}
toggleHighlight();


/*
Write a function which returns all text content of the introduction paragraph
*/
var getText = function(){
var text = document.getElementsByClassName('introduction')[0].innerHTML;
console.log(text);
}
getText(); //uncomment me to test


/*
Write a function which takes a string, and returns true if the introduction
paragraph contains that string, and false if it doesn't.
*/
var containsString = function(str){

var text = document.getElementsByClassName('introduction')[0].innerHTML;
str = "hjdhsfgkjhkjghsjgl";
if(text.includes(str)){
  return true;
}
else return false;
}
containsString(); //uncomment me to test


/*
Write a function which returns the value in the `firstName` text input
*/
var getFirstNameValue = function(){
var text = document.getElementsByClassName('test');
return text[0].value;
}
getFirstNameValue(); //uncomment me to test


/*
Write a function which takes a string, `inputName`, and returns the value in the input which
has `inputName` as the name attribute
*/
var getValue = function(inputName){
inputName='gjdkhksj';
var name = document.getElementsByTagName('input');
name[1].innerHTML = inputName;

return name[1].innerHTML;

}
getValue(); //uncomment me to test


/*
Write a function which takes an object,`formState`, and a string, `inputName`,
and returns a copy of the object, but with an `inputName` key on the object
whose value is taken from the input element with that name.
*/
var updateStateValue = function (formState, inputName){

}
// updateStateValue(put an argument here ); //uncomment me to test


/*
Write a function which takes an object,`formState`, and an array of string
`inputNames`, and returns a copy of the object, which stores the values of each
input with name in `inputNames` array.
*/
var updateStateValues = function(formState, inputNames){

}
// updateStateValues(put an argument here ); //uncomment me to test


/*
Write a function which returns an **array** of values of inputs with a given class
*/
var getInputValues = function(className){

}
// getInputValues(put an argument here ); //uncomment me to test


/*
Write a function, `generateUl`, which takes an array of strings, and returns a
`ul` htmlElement containing `li` elements for each array element. Each `li'
should contain the value of the array element.
*/
var generateUl = function(array){

}
// generateUl(put an argument here ); //uncomment me to test
