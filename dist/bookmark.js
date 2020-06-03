"use strict";
// selectors
/*
var titleInput =  document.getElementById('new-title');
var urlInput =  document.getElementById('new-url');
var newList =  document.getElementById("bookmark-list");
*/
var addBtn = document.querySelector('.add-div');
var titleInput = document.querySelector('.new-title');
var urlInput = document.querySelector('.new-url');
var bookmarkList = document.querySelector('.bookmark-list');
if (addBtn == null || titleInput == null || urlInput == null || bookmarkList == null) {
    alert("bookmark is null");
}
else {
    addBtn.onclick = function addBookmark() {
        // creating new bookmark div
        var bookmarkDiv = document.createElement('div');
        bookmarkDiv.classList.add('vgbhfgdgdfg');
        // creating li element
        var newBookmark = document.createElement('li');
        newBookmark.innerText = 'hey';
        newBookmark.classList.add('todo-item');
        bookmarkDiv.appendChild(newBookmark);
        //completed button
        var completedButton = document.createElement('button');
        completedButton.innerText = '<is complted working>';
        completedButton.classList.add("complete-btn");
        bookmarkDiv.appendChild(completedButton);
        //trash button
        var trashButton = document.createElement('button');
        trashButton.innerText = 'is trash working';
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
    };
}
