export default function(className) {
    const projectBoardElement = document.createElement('div');
    const undefContainer = document.createElement('div');
    const doingDoneContainer = document.createElement('div');
    const doingContainer = document.createElement('div');
    const doneContainer = document.createElement('div');

    const undefTitle = document.createElement('h3');
    const doingTitle = document.createElement('h3');
    const doneTitle = document.createElement('h3');

    undefContainer.id = 'undef-container';
    doingDoneContainer.id = 'doing-done-container';
    doingContainer.id = 'doing-container';
    doneContainer.id = 'done-container';


    projectBoardElement.classList.add('board-' + className);


    projectBoardElement.value = className;

    undefTitle.textContent = 'Undefined tasks';
    doingTitle.textContent = 'Doing';
    doneTitle.textContent = 'Done';

    undefContainer.appendChild(undefTitle);
    doingContainer.appendChild(doingTitle);
    doneContainer.appendChild(doneTitle);


    projectBoardElement.appendChild(undefContainer);

    doingDoneContainer.appendChild(doingContainer);
    doingDoneContainer.appendChild(doneContainer);

    projectBoardElement.appendChild(doingDoneContainer);

    return projectBoardElement;
}