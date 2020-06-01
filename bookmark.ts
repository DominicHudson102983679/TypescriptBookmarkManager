// selectors
const newTitle = document.getElementById('.new-title');
const newUrl = document.getElementById('.new-url');
const addButton = document.getElementById('.add-div2');

//this probably wont work
const newListing = document.getElementById('.bookmark-list');

// event listeners
addButton.addEventListener('click', addBookmark);

// functions
function addBookmark(){
    // prevent form from submitting
    event.preventDefault();
    //

    const bookmarkDiv = document.createElement("div");
    bookmarkDiv.classList.add("bookmark-list");

    // adding new bookmark to bookmark-list div
    const newBookmark = document.createElement('span');
    newBookmark.innerText = 'hey';
    newBookmark.classList.add('bookmark-item');
    bookmarkDiv.appendChild(newBookmark);

    // fav button
    const favButton = document.createElement('button');
    favButton.innerHTML = '<i class="fas fa-heart"></i>';
    favButton.classList.add("favButton");
    bookmarkDiv.appendChild(favButton);

    // trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas trash"></i>';
    trashButton.classList.add("trashButton");
    bookmarkDiv.appendChild(trashButton);
    //append to list
    newListing.appendChild(newBookmark);
    newUrl.innerText = "";
    newTitle.innerText = "";
}