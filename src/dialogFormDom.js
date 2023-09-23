export default function(){

    //Create dialog form elements for task creation
    const dialogElement = document.createElement('dialog');
    const formElement = document.createElement('form');
    const titleInput = document.createElement('input');
    const designationInput = document.createElement('input');
    const statusSelect = document.createElement('select');
    const importanceSelect = document.createElement('select');

    //Append all elements to the dialog element
    dialogElement.appendChild(formElement);
    formElement.appendChild(titleInput);
    formElement.appendChild(designationInput);
    formElement.appendChild(statusSelect);
    formElement.appendChild(importanceSelect);

    return dialogElement;

}