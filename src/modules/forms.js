import { addList } from "./lists";

const addAListButton = document.getElementsByClassName("add-list")[0];
const addAListForm = document.getElementsByClassName("add-list-form")[0];
const cancelButton = document.getElementsByClassName("add-list-buttons")[0].children[1];
const submitListButton = document.getElementsByClassName("add-list-buttons")[0].children[0];


const showAddForm = () => {
    addAListForm.classList.remove("invisible");
}

const hideAddForm = () => {
    addAListForm.children[0].value = "";
    addAListForm.classList.add("invisible");
    document.getElementsByClassName("add-list-error")[0].textContent = "";
}


    


const giveFormButtonsFunctionality = () => { 
    addAListButton.onclick = showAddForm;
    cancelButton.onclick = hideAddForm;
    submitListButton.onclick = () => {
        addList(document.getElementById("list-name-input").value);
        addAListForm.children[0].value = "";
    }
}

export {giveFormButtonsFunctionality, hideAddForm};