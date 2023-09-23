export default function(taskInfo) {

    //Create elements
    const taskContainer = document.createElement('div');
    const taskTitle = document.createElement('h3');
    const taskDesignationContainer = document.createElement('div');
    const taskDesignation = document.createElement('p');
    const optnsContainer = document.createElement('div');
    const changeStatus = document.createElement('select');
    const changeImportance = document.createElement('select');

    const selectedStatus = document.createElement('option');
    const selectedImportance = document.createElement('option');

    //Add content to elements
    taskTitle.textContent = taskInfo[0];
    taskDesignation.textContent = taskInfo[1];

    selectedStatus.textContent = taskInfo[2];
    selectedStatus.value = taskInfo[2];

    selectedImportance.textContent = taskInfo[3];
    selectedImportance.value = taskInfo[3];

    //Add selected values as selected to select
    changeStatus.add(selectedStatus);
    changeImportance.add(selectedImportance);

    //Append elements to father
    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskDesignationContainer);
    taskContainer.appendChild(optnsContainer);

    taskDesignationContainer.appendChild(taskDesignation);

    optnsContainer.appendChild(changeStatus);
    optnsContainer.appendChild(changeImportance);

    return taskContainer;
}


