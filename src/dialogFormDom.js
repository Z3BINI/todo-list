export default function(){

    //Create dialog form elements for task creation
    const dialogElement = document.createElement('dialog');
    const formElement = document.createElement('form');

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
    submitBtn.textContent = 'Add task';
    cancelBtn.textContent = 'Close';
    defaultStatus.textContent = 'Task status...';
    defaultImportance.textContent = 'Task importance...';

    //importances
    importance[1].textContent = 'Low';
    importance[2].textContent = 'Medium';
    importance[3].textContent = 'High';

    //satuses
    status[1].textContent = 'Undefined';
    status[2].textContent = 'Doing';
    status[3].textContent = 'Done';

    titleInput.placeholder = 'Task title...';
    designationInput.placeholder = 'Task designation...';

    //Default option attributes
    defaultImportance.disabled = true;
    defaultImportance.hidden = true;
    defaultImportance.selected = true;

    defaultStatus.disabled = true;
    defaultStatus.hidden = true;
    defaultStatus.selected = true;

    //Add btn value
    submitBtn.value = 'send';

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
    formElement.appendChild(titleInput);
    formElement.appendChild(designationInput);
    formElement.appendChild(statusSelect);
    formElement.appendChild(importanceSelect);
    formElement.appendChild(submitBtn);
    formElement.appendChild(cancelBtn);

    return dialogElement;

}