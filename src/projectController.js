//Init projects array
let projects = [];

export default function(event) { 

    //Cache Dom 
    const selector = document.querySelector('select');
    const projectWrapper = document.querySelector('.board');
    const currentLoadedProject = document.querySelector('.board > div');

    //Render module functions
    const render = {

        addProjectsToSelector: () =>  projects.forEach(project => selector.add(project.option)),
        clearProjectsInSelector: () => selector.innerHTML = '',
        addDefaultOptnInSelector: () => {
            const defaultOption = document.createElement('option');
            
            defaultOption.text = 'Select a project...';
            defaultOption.selected = true;
            defaultOption.disabled = true;
            defaultOption.hidden = true;
        
            selector.add(defaultOption, 0);
        },
        clearCurrentProject: () => projectWrapper.innerHTML = '',
        selectedProject: (boardName) => {
            const searchSelected = controller.searchProject(boardName);
    
            if (searchSelected.length === 1) {
                return projectWrapper.appendChild(searchSelected[0].element);
            }
        }

    }

    //Logic module functions
    const controller = {

        projectMaker: (className, name) => {
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
        },

        deleteCurrentProject: () => {
            projects = projects.filter( project => project.element.value !== currentLoadedProject.value)
        },

        searchProject: (needle) => projects.filter(project => project.option.value === needle)

    }
    
    //Event checker
    if (event.target.id === 'add-project') {
        const projectName = prompt('Name your project:');
        const projectClassName = projectName.replaceAll(' ', '-');

        controller.projectMaker(projectClassName, projectName);
        render.addProjectsToSelector();
        return;
    }

    if (event.target.id === 'project-change') {
        render.clearCurrentProject();
        render.selectedProject(event.target.value);
        return;
    }

    if (event.target.id === 'del-project') {
        if (!currentLoadedProject) return alert('No project selected!'); 
        if (confirm('This will permanently delete the board, are you sure?')) {
            controller.deleteCurrentProject();
            render.clearCurrentProject();
            render.clearProjectsInSelector();
            render.addDefaultOptnInSelector();
            render.addProjectsToSelector();
            return;
        }
        return;
    }

}



    


