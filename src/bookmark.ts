// selectors
/*
var titleInput =  document.getElementById('new-title');
var urlInput =  document.getElementById('new-url');
var newList =  document.getElementById("bookmark-list");
*/

var addBtn =  document.querySelector('.add-div') as HTMLButtonElement | null;

const titleInput = document.querySelector('.new-title') as HTMLInputElement | null;
const urlInput = document.querySelector('.new-url') as HTMLInputElement | null;

const bookmarkList = document.querySelector('.bookmark-list') as HTMLUListElement | null;



if(addBtn == null || titleInput == null || urlInput == null || bookmarkList == null){
    alert("bookmark is null");
} else {
addBtn.onclick = function addBookmark() {

    // creating new bookmark div
    const bookmarkDiv = document.createElement('div');
    bookmarkDiv.classList.add('vgbhfgdgdfg');
    // creating li element
    var newBookmark = document.createElement('li');

    newBookmark.innerText = 'hey';
    newBookmark.classList.add('todo-item')
    bookmarkDiv.appendChild(newBookmark);
    //completed button
    const completedButton = document.createElement('button');
    completedButton.innerText = '<is complted working>';
    completedButton.classList.add("complete-btn");
    bookmarkDiv.appendChild(completedButton);
    //trash button
    const trashButton = document.createElement('button');
    trashButton.innerText = 'is trash working'
    trashButton.classList.add("trash-btn");
    bookmarkDiv.appendChild(trashButton);
    //
    bookmarkList.appendChild(bookmarkDiv);


    /*
    var titleNode = document.createTextNode(titleInput.value);
    var urlNode = document.createTextNode(urlInput.value);
    li.appendChild(titleNode);
    li.appendChild(urlNode);
    titleInput.innerHTML = "";
    urlInput.innerHTML = "";
    */
}

}
