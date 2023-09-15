//Initialize the projects array
const projects = [];

const eventManager = function(eventType) {

    if (eventType === 'add-board') {
        boardMaker(prompt('Name your project:'));
        renderBoardOptns();
        return;
    };

}

const boardMaker = function(name) {

    //Create new project board element
    const projectBoardElement = document.createElement('div');
    projectBoardElement.classList.add('board');
    projectBoardElement.value = name;
    
    //Create new project board option for the select
    const boardOption = document.createElement('option');
    boardOption.text = name;
    boardOption.value = name;

    //Unite them in an object
    const boardObj = {
        element: projectBoardElement,
        option: boardOption
    }

    return projects.push(boardObj);

}

const renderBoardOptns = function() {

    //Cache the select element
    const selector = document.querySelector('select');

    projects.forEach(project => {
        selector.add(project.option);
    });
    
}

export { eventManager }
    


