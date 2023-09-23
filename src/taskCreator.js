import taskFactory from './taskFactory.js';
import dialogElement from './dialogFormDom.js';

export default function(event){

    //Get current loaded board, if any
    const currentBoard = document.querySelector('.board > div');
    
    if (currentBoard) { 

        //Create dialog & form DOM and append to current board
        const dialogForm = dialogElement(); 
        currentBoard.appendChild(dialogForm); 

        //Show the form for a new task to be added
        dialogElement.showModal();
        
        //use data to create new task on factory
        //render new data with DOM renderer

        //const task = new taskFactory('test', 'test', 'test', 'test');

        return;   
    }

    return alert('No board selected to add task!');

}