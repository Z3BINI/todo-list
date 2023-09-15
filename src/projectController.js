//Initialize the projects array
const projects = [];

const eventManager = function(event) { 

    //Cache Dom here
    const selector = document.querySelector('select');
    const projectWrapper = document.querySelector('.board');

    if (event.target.id === 'add-project') {
        projectMaker(prompt('Name your project:'));
        addProjectsToSelector(selector);
        return;
    }

    if (event.target.id === 'project-change') {
        clearCurrentProject(projectWrapper);
        renderSelectedProject(event.target.value, projectWrapper);
        return;
    }

    if (event.target.id === 'del-project') {
        console.log('delete');
    }

}

const projectMaker = function(name) {

    //Create new project board element
    const projectBoardElement = document.createElement('div');
    projectBoardElement.classList.add('board-' + name);
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

const addProjectsToSelector = (selector) => projects.forEach(project => selector.add(project.option));

const clearCurrentProject = (projectWrapper) => projectWrapper.innerHTML = '';

const renderSelectedProject = function(boardName, projectWrapper) { 

    const searchSelected = projects.filter(project => project.option.value === boardName);
    
    if (searchSelected.length === 1) {
        projectWrapper.appendChild(searchSelected[0].element);
    }

}

export { eventManager }
    


