<!-- 1 Number answer -->
* getElementById is single element and select one element if no element found return null
*getElementByClassName is select all class in html collection 
*querySelector is single element type css and return the first element and to write id name
*querySelectorAll is select the all css class and return the all css class element 

<!-- 2 number answer -->
*create athe element
const newDiv=document.getElementById("div");


*add content and attribute
newDiv.textcontent="hello world"
newDiv.className="myclass"

*insert Dom
const parent=document.getElementById("container");
parent.appentChild(newDiv);
parent.prepent(newDiv);

<!-- 3 number answer -->
*Event bubbling 
when an event occurs in the Dom ,it propagates from the child element up to parent elements

<!-- example -->
click on a <button>--event bubbles to <div> --<body>--<html>