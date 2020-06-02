// selectors
/*
var titleInput =  document.getElementById('new-title');
var urlInput =  document.getElementById('new-url');
var newList =  document.getElementById("bookmark-list");
*/

var addBtn =  document.querySelector('.add-div') as HTMLButtonElement | null;


if(addBtn == null){
    alert("addBtn not found");
} else {
addBtn.onclick = function () {
    alert("hahahaha");
}}

