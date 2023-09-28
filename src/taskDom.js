export default function(taskInfo) {

    //Create elements
    const taskContainer = document.createElement('div');
    const taskTitle = document.createElement('h3');
    const taskDesignationContainer = document.createElement('div');
    const taskDesignation = document.createElement('p');
    const optnsContainer = document.createElement('div');
    const changeStatus = document.createElement('select');
    const changeImportance = document.createElement('select');
    const delBtn = document.createElement('button');

    const statuses = document.querySelectorAll('#status > option');
    const importances = document.querySelectorAll('#importance > option');

    const selectedStatus = document.createElement('option');
    const selectedImportance = document.createElement('option');

    //Add content to elements
    taskTitle.textContent = taskInfo[0];
    taskDesignation.textContent = taskInfo[1];

    selectedStatus.textContent = taskInfo[2];
    selectedStatus.value = taskInfo[2];

    selectedImportance.textContent = taskInfo[3];
    selectedImportance.value = taskInfo[3];

    delBtn.textContent = 'Delete';


    //Add class
    delBtn.classList.add('del');
    changeImportance.classList.add('change-imp');
    changeStatus.classList.add('change-stat');

    //Append clones of the option elements to the change select element
    for (let i = 1; i < 4; i++) {
        changeStatus.appendChild(statuses[i].cloneNode(true)); //Otherwise the 'old' elements would be deleted...
        changeImportance.appendChild(importances[i].cloneNode(true));
    }    
    
    //Look for the selected option and initialize it as selected
    Array.from(changeStatus).forEach(status => {
        if (status.value === selectedStatus.value) status.selected = true;
    });
    Array.from(changeImportance).forEach(importance => {
        //Check wich status is the selected one for this task
        if (importance.value === selectedImportance.value) importance.selected = true;
    });

    //Give container a class
    taskContainer.classList.add('cards');

    //Append elements to father
    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskDesignationContainer);
    taskContainer.appendChild(optnsContainer);

    taskDesignationContainer.appendChild(taskDesignation);

    optnsContainer.appendChild(changeStatus);
    optnsContainer.appendChild(changeImportance);
    optnsContainer.appendChild(delBtn);

    return taskContainer;
}


