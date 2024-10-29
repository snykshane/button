
const userList = document.querySelector('.name-list');
const listInput = document.querySelector('.list-input');
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventlistener("click", function(){
    //Create an LI out of thin air
    const newLi = document.createElement('li');
    const liContent = document.createTextNode(listInput.value);
    //add the input value inside that new li
    newLi.appendChild(liContent);
    //attaching the li to theuser list
    userList.appendChild(newLi);
});