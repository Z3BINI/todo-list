export default function(){

    //Create dialog form elements for task creation
    const dialogElement = document.createElement('dialog');
    const title = document.createElement('h2');
    const formElement = document.createElement('form');
    const inputContainer = document.createElement('div');
    const btnContainer = document.createElement('div');

    const titleInput = document.createElement('input');
    const designationInput = document.createElement('input');

    const statusSelect = document.createElement('select');
    const importanceSelect = document.createElement('select');

    const status = [];
    const importance = [];

    for (let i = 1; i < 4; i++){
        status[i] = document.createElement('option');
        importance[i] = document.createElement('option');
    };

    const defaultStatus = document.createElement('option');
    const defaultImportance = document.createElement('option');

    const submitBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');

    //Add inner conent text or labels/placeholders
    title.textContent = 'New task';
    submitBtn.textContent = 'Add task';
    cancelBtn.textContent = 'Close';
    defaultStatus.textContent = 'Task status';
    defaultImportance.textContent = 'Task importance';

    //importances
    importance[1].textContent = 'Low';
    importance[2].textContent = 'Medium';
    importance[3].textContent = 'High';

    //satuses
    status[1].textContent = 'Undefined';
    status[2].textContent = 'Doing';
    status[3].textContent = 'Done';

    titleInput.placeholder = 'Task title';
    designationInput.placeholder = 'Task designation';

    //Default option attributes
    defaultImportance.disabled = true;
    defaultImportance.hidden = true;
    defaultImportance.selected = true;

    defaultStatus.disabled = true;
    defaultStatus.hidden = true;
    defaultStatus.selected = true;

    //Add btn value
    submitBtn.value = 'send';

    //Btn IDs
    submitBtn.id = 'insert-task';
    cancelBtn.id = 'cancel-task';

    //Input IDs
    titleInput.id = 'title';
    designationInput.id = 'designation';
    statusSelect.id = 'status';
    importanceSelect.id = 'importance';

    //Add default options to the respective select elements
    statusSelect.add(defaultStatus);
    importanceSelect.add(defaultImportance);

    //Add options to respecitve select elements
    for (let i = 1; i < 4; i++) {
        statusSelect.add(status[i]);
        importanceSelect.add(importance[i]);
    }

    //Append all elements to the dialog element
    dialogElement.appendChild(formElement);
    formElement.appendChild(title);
    formElement.appendChild(inputContainer);
    formElement.appendChild(btnContainer);

    inputContainer.appendChild(titleInput);
    inputContainer.appendChild(designationInput);
    inputContainer.appendChild(statusSelect);
    inputContainer.appendChild(importanceSelect);
    
    btnContainer.appendChild(submitBtn);
    btnContainer.appendChild(cancelBtn);

    return dialogElement;

}