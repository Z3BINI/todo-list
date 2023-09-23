import taskFactory from './taskFactory.js';
import taskDom from './taskDom.js';

export default function(event){
    
    //Prevent page refresh case form btns are pressed
    event.preventDefault();
    
    //Cache dialog element
    const dialogForm = document.querySelector('dialog');

    const render = {
        showForm: () => dialogForm.showModal(),
        closeForm: () => dialogForm.close(),
        resetForm: () => dialogForm.children[0].reset(),
        resetSelects: () => {
            const selects = document.querySelectorAll('form select');

            selects.forEach(select => {
                select.options[0].selected = true;
            });
        }

    }

    const control = {
        getUserInput: () => {

            const title = document.querySelector('#title');
            const designation = document.querySelector('#designation');
            const status = document.querySelector('#status');
            const importance = document.querySelector('#importance');

            return [title.value, designation.value, status.value, importance.value];
        }
    }

    //Get current loaded board, if any
    const currentBoard = document.querySelector('.board > div');

    if (event.target.id === 'insert-task') {

        //https://stackoverflow.com/questions/44372822/preventdefault-stops-form-validation --> Form validation with preventDefault()

        const newTaskArr = control.getUserInput();
        const taskElement = taskDom(newTaskArr);

        newTaskArr.push(currentBoard);
        newTaskArr.push(taskElement);

        render.closeForm();
        render.resetForm();
        render.resetSelects();

        const newTask = new taskFactory(newTaskArr);

        newTask.place();
        console.log(newTask);
    }

    if (event.target.id === 'add-task') {

        if (!currentBoard) return alert('No board selected to add task!');  

        render.showForm();
    }
    
    if (event.target.id === 'cancel-task') {
        render.closeForm();
    }
    
}