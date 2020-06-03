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
        // bookmarkDiv.classList.add('new-bookmark-item');
        // creating li element
        var newBookmark = document.createElement('li');
        newBookmark.classList.add('new-bookmark-item');
        bookmarkDiv.appendChild(newBookmark);
        // general icon
        var genIcon = document.createElement('button');
        genIcon.innerHTML = '<i class="fas fa-globe fa-4x"></i>';
        genIcon.classList.add("gen-icon");
        bookmarkDiv.appendChild(genIcon);
        //completed button
        var completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-heart fa-4x"></i>';
        completedButton.classList.add("complete-btn");
        bookmarkDiv.appendChild(completedButton);
        //trash button
        var trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash fa-4x"></i>';
        trashButton.classList.add("trash-btn");
        bookmarkDiv.appendChild(trashButton);
        // input for title/url nodes
        var titleValue = titleInput.value;
        var urlValue = urlInput.value;
        // converting title/url nodes to text
        var newTitle = document.createTextNode(titleValue);
        var newUrl = document.createTextNode(urlValue);
        // adds title, url, completed/trash buttons to list
        bookmarkList.appendChild(genIcon);
        bookmarkList.appendChild(newTitle);
        bookmarkList.appendChild(newUrl);
        bookmarkList.appendChild(completedButton);
        bookmarkList.appendChild(trashButton);
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
