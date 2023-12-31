import projectBoardDom from './projectBoardDom.js';

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
        },

        createBoardElement: (className) => {
            
            const projectBoardElement = projectBoardDom(className);
            
            

            return projectBoardElement;
        },

        createBoardOptionElement: (className, name) => {
            const boardOptionElement = document.createElement('option');
            boardOptionElement.text = name;
            boardOptionElement.value = className;

            return boardOptionElement;
        }

    }

    //Logic module functions
    const controller = {

        projectMaker: (className, name) => {
            //Create new project board element
            const projectBoardElement = render.createBoardElement(className, name);
            
            //Create new project board option for the select
            const boardOptionElement = render.createBoardOptionElement(className, name);
        
            //Unite them in an object
            const boardObj = {
                element: projectBoardElement,
                option: boardOptionElement
            }
        
            projects.push(boardObj);

            return;
        },

        deleteCurrentProject: () => {
            projects = projects.filter( project => project.element.value !== currentLoadedProject.value);
            return;
        },

        searchProject: (needle) => projects.filter(project => project.option.value === needle),

        checkForExistingBoardName: (projectClassName) => projects.find(project => project.option.value === projectClassName)

    }
    
    //Event checker
    if (event.target.id === 'add-project') {

        const projectName = prompt('Name your project:');

        if(projectName) {
            const projectClassName = projectName.replaceAll(' ', '-');
            
            if (!(controller.checkForExistingBoardName(projectClassName))) {
                controller.projectMaker(projectClassName, projectName);
                render.addProjectsToSelector();
                return;
            }
            alert(`Board named "${projectName}" already exists! Please chose a different name.`);
            return;
        } 

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



    


