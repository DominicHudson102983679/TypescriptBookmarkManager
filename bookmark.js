// selectors
var newTitle = document.getElementById('.new-title');
var newUrl = document.getElementById('.new-url');
var addButton = document.getElementById('.add-div2');
//this probably wont work
var newListing = document.getElementById('.bookmark-list');

// event listeners
addButton.addEventListener('click', addBookmark);

// functions
function addBookmark() {
    // prevent form from submitting
    //event.preventDefault();
    //
    var bookmarkDiv = document.createElement("div");
    bookmarkDiv.classList.add("container1");
    // adding new bookmark to bookmark-list div
    var newBookmark = document.createElement('span');
    newBookmark.innerText = 'hey';
    newBookmark.classList.add('bookmark-item');
    bookmarkDiv.appendChild(newBookmark);
    // fav button
    var favButton = document.createElement('button');
    favButton.innerHTML = '<i class="fas fa-heart"></i>';
    favButton.classList.add("favButton");
    bookmarkDiv.appendChild(favButton);
    // trash button
    var trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas trash"></i>';
    trashButton.classList.add("trashButton");
    bookmarkDiv.appendChild(trashButton);
    //append to list
    newListing.appendChild(newBookmark);
    newUrl.innerText = "";
    newTitle.innerText = "";
}
