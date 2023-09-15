//Initialize the projects array
const projects = [];

const eventManager = function(eventType) {

    if (eventType === 'add-board') {
        boardMaker(prompt('Name your project:'));
        
        return;
    };

}

const boardMaker = function(name) {

    //Create new project board
    const projectBoard = document.createElement('div');
    projectBoard.classList.add('board');
    projectBoard.value = name;

    return projects.push(projectBoard);

}



export { eventManager }
    


