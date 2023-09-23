import taskFactory from './taskFactory.js';
import dialogElement from './dialogFormDom.js';
import eventController from './eventController.js';

export default function(){

    //Get current loaded board, if any
    const currentBoard = document.querySelector('.board > div');
    
    if (currentBoard) { 

        //Create dialog & form DOM and append to current board
        const dialogForm = dialogElement(); 
        currentBoard.appendChild(dialogForm); 

        //Show the form for a new task to be added
        dialogForm.showModal();

        //Cache dialog buttons
        const dialogBtns = document.querySelectorAll('form > div > button');

        //Send any click to event controller
        dialogBtns.forEach(dialogBtn => dialogBtn.addEventListener('click', (event) => eventController(event)));

        //use data to create new task on factory
        //render new data with DOM renderer

        //const task = new taskFactory('test', 'test', 'test', 'test');

        return;   
    }

    return alert('No board selected to add task!');

}