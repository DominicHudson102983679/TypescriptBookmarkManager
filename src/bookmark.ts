// selectors
var addBtn =  document.querySelector('.add-div') as HTMLButtonElement | null;

const titleInput = document.querySelector('.new-title') as HTMLInputElement | null;
const urlInput = document.querySelector('.new-url') as HTMLInputElement | null;

const bookmarkList: HTMLElement | null = document.querySelector('.bookmark-list');
const exampleBookmark: HTMLElement | null = document.querySelector('.example-bookmark1');
// event listerners
/*
bookmarkList.addEventListener("click", highlight());
exampleBookmark.addEventListener("click", highlight());
*/




if(addBtn == null || titleInput == null || urlInput == null || bookmarkList == null){
    alert("bookmark is null");
} else {
addBtn.onclick = function addBookmark() {
    // creating new bookmark div
    const bookmarkDiv = document.createElement('div');
    bookmarkDiv.classList.add('example-bookmark');
    // creating li element
    var newBookmark = document.createElement('li');
    newBookmark.classList.add('example-bookmark');
    bookmarkDiv.appendChild(newBookmark);
    // new bookmark icon
    const genIcon = document.createElement('div');
    genIcon.innerHTML = '<i class="fas fa-globe fa-4x"></i>';
    genIcon.classList.add("gen-icon");
    // title input
    const newTitle = document.createElement('div');
    newTitle.innerText = titleInput.value;
    newTitle.classList.add("new-title-div");
    // url input
    const newUrl = document.createElement('div');
    newUrl.innerText = urlInput.value;
    newUrl.classList.add("new-url-div");
    //completed button
    const completedButton = document.createElement('div');
    completedButton.innerHTML = '<i class="fas fa-heart fa-4x"></i>';
    completedButton.classList.add("complete-btn");
    //trash button
    const trashButton = document.createElement('div');
    trashButton.innerHTML = '<i class="fas fa-trash fa-4x"></i>'
    trashButton.classList.add("trash-btn");
    // appending child to new list
    bookmarkList.appendChild(genIcon);
    bookmarkList.appendChild(newTitle);
    bookmarkList.appendChild(newUrl);
    bookmarkList.appendChild(completedButton);
    bookmarkList.appendChild(trashButton); 
}
}
