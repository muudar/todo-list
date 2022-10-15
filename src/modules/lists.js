import { hideAddForm } from "./forms";

const list = (name, todos) => {
    return {name, todos};
}

if(!localStorage.getItem('listOfLists')){
    var listOfLists = [];
    listOfLists.push(list("Default List", []));
    localStorage.setItem('listOfLists', JSON.stringify(listOfLists));
}

const getListOfLists = () => {
    return JSON.parse(localStorage.getItem("listOfLists"));
}

const updateListOfLists = (listOfLists) => {
    localStorage.setItem('listOfLists', JSON.stringify(listOfLists));
}

const newList = localStorage.getItem('listOfLists');


const listsDiv = document.getElementsByClassName("lists")[0];
const listOfListsDiv = listsDiv.children[0];
const errorDiv = document.getElementsByClassName("add-list-error")[0];

const loadLists = () => {
    listOfListsDiv.innerHTML = "";
    for(const l of getListOfLists()){
        const listItem = document.createElement("li");
        listItem.textContent = l.name;
        const taskNumbersDiv = document.createElement("div");
        taskNumbersDiv.classList.add("task-numbers");
        taskNumbersDiv.textContent = l.todos.length;
        listItem.appendChild(taskNumbersDiv);
        listOfListsDiv.appendChild(listItem);
        listItem.onclick = () => {
            for(const l2 of listOfListsDiv.children){
                l2.classList.remove("active-list");
            }
            listItem.classList.add("active-list");
        }
        if(l.name == "Default List"){
            continue;
        }
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "X";
        listItem.appendChild(deleteButton);
        deleteButton.onclick = () => {
            deleteListItem(l.name);
        }
    }
}

const deleteListItem = (name) => {
    var listOfLists = getListOfLists();
    for(let i = 0; i < listOfLists.length; i++){
        if(listOfLists[i].name == name){
            listOfLists.splice(i,1);
        }
    }
    updateListOfLists(listOfLists);
    loadLists();
}

const checkListNameTaken = (name) => {
    for(const l of getListOfLists()){
        if(name.valueOf() == l.name.valueOf())
            return true;
    }
    return false;
}

const displayListNameTakenError = () => {
    errorDiv.textContent = "List name is already taken!";
}

const displayMaxListsEror = () => {
    errorDiv.textContent = "A maximum of 10 lists is allowed";
}

const displayEmptyStringError = () => {
    errorDiv.textContent = "List name cannot be empty!";
}

const displayTooManyCharsError = () => {
    errorDiv.textContent = "Lists can only have a max of 12 characters";
}

const addList = (name) => {
    var listOfLists = getListOfLists();
    name = name.trim();
    if(name.length > 12){
        displayTooManyCharsError();
        return;
    }
    if(checkListNameTaken(name)){
        displayListNameTakenError();
        return;
    }
    if(listOfLists.length >= 10){
        displayMaxListsEror();
        return;
    }
    if(name == ""){
        displayEmptyStringError();
        return;
    }
    errorDiv.textContent = "";
    var listItem = list(name, []);
    listOfLists.push(listItem);
    updateListOfLists(listOfLists);
    hideAddForm();
    loadLists();
}


export {loadLists, addList};