export default function(className) {
    const projectBoardElement = document.createElement('div');
    const undefContainer = document.createElement('div');
    const doingDoneContainer = document.createElement('div');
    const doingContainer = document.createElement('div');
    const doneContainer = document.createElement('div');

    const innerUndef = document.createElement('div');
    const innerDoing = document.createElement('div');
    const innerDone = document.createElement('div');

    const undefTitle = document.createElement('h2');
    const doingTitle = document.createElement('h2');
    const doneTitle = document.createElement('h2');

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

    undefContainer.appendChild(innerUndef);
    doingContainer.appendChild(innerDoing);
    doneContainer.appendChild(innerDone);


    projectBoardElement.appendChild(undefContainer);

    doingDoneContainer.appendChild(doingContainer);
    doingDoneContainer.appendChild(doneContainer);

    projectBoardElement.appendChild(doingDoneContainer);

    return projectBoardElement;
}