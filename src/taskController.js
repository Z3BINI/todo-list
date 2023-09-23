export default function(event){
    
    //Prevent page refresh case form btns are pressed
    event.preventDefault();
    
    //Cache dialog element
    const dialogForm = document.querySelector('dialog');

    const render = {
        showForm: () => dialogForm.showModal(),
        closeForm: () => dialogForm.close()
    }

    if (event.target.id === 'insert-task') {
        
    }

    if (event.target.id === 'add-task') {

        //Get current loaded board, if any
        const currentBoard = document.querySelector('.board > div');

        if (!currentBoard) return alert('No board selected to add task!');  

        render.showForm();
    }
    
    if (event.target.id === 'cancel-task') {
        render.closeForm();
    }
    
}