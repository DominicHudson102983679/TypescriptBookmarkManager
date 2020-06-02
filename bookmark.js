// functions
function addUrl() {
    console.log("hello");
}
// selectors
var titleInput = document.getElementById('new-title');
var urlInput = document.getElementById('new-url');
var addBtn = document.getElementById("add-div2");
var newList = document.getElementById("bookmark-list");
// event listeners
addBtn.addEventListener("click", addUrl);
