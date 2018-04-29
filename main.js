var counter= 5;
var myList = document.getElementById('list-items');
var listitems = document.getElementById('list-items').getElementsByTagName('li');
var headerline= document.getElementById('my-header');
var btn = document.getElementById('my-button');



myList.addEventListener('click', activateitem);


function activateitem(e){
if(e.target.nodeName == 'LI'){
  headerline.innerHTML = e.target.innerHTML;
}}

btn.addEventListener('click', addItem);

function addItem(){
myList.innerHTML  += '<li>Item ' + counter + '</li>';
counter ++;
}
