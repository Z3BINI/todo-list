//Initialize the projects array
const projects = [];

const eventManager = function(event) { 

    //Cache Dom here
    const selector = document.querySelector('select');
    const projectWrapper = document.querySelector('.board');
    const currentLoadedProject = document.querySelector('.board > div');

    if (event.target.id === 'add-project') {
        const projectName = prompt('Name your project:');
        const projectClassName = projectName.replaceAll(' ', '-');

        projectMaker(projectClassName, projectName);
        addProjectsToSelector(selector);
        return;
    }

    if (event.target.id === 'project-change') {
        clearCurrentProject(projectWrapper);
        renderSelectedProject(event.target.value, projectWrapper);
        return;
    }

    if (event.target.id === 'del-project') {
        deleteCurrentProject(currentLoadedProject);
        clearCurrentProject(projectWrapper);
        return;
    }

}

const projectMaker = function(className, name) {

    //Create new project board element
    const projectBoardElement = document.createElement('div');
    projectBoardElement.classList.add('board-' + className);
    projectBoardElement.value = className;
    
    //Create new project board option for the select
    const boardOption = document.createElement('option');
    boardOption.text = name;
    boardOption.value = className;

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

    const searchSelected = searchProject(boardName);
    
    if (searchSelected.length === 1) {
        return projectWrapper.appendChild(searchSelected[0].element);
    }

}

const deleteCurrentProject = function(currentLoadedProject) {
    if (!currentLoadedProject) return alert('No project selected!'); 

    const searchSelected = searchProject(currentLoadedProject.value);
    console.log(searchSelected);
}

const searchProject = (needle) => projects.filter(project => project.option.value === needle);

export { eventManager }
    


