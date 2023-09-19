export default function(className) {
    const projectBoardElement = document.createElement('div');

    const undefContainer = document.createElement('div');

    const doingDoneContainer = document.createElement('div');
    
    const doingContainer = document.createElement('div');
    const doneContainer = document.createElement('div');

    undefContainer.id = 'undef-container';
    doingContainer.id = 'doing-container';
    doneContainer.id = 'done-container';


    projectBoardElement.classList.add('board-' + className);


    projectBoardElement.value = className;


    projectBoardElement.appendChild(undefContainer);

    doingDoneContainer.appendChild(doingContainer);
    doingDoneContainer.appendChild(doneContainer);

    projectBoardElement.appendChild(doingDoneContainer);

    return projectBoardElement;
}