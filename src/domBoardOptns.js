export default function() {

    //Cache dom
    const wrapper = document.querySelector('.board-optns');

    //Create elements
    const title = document.createElement('h2');

    const projectSelectorGroup = document.createElement('div');
    const projectSelector = document.createElement('select');
    const projectSelectorTxt = document.createElement('p');
    const projectSelectorNew = document.createElement('button');
    const defaultOption = document.createElement('option');

    const addCardBtn = document.createElement('button');
    const delProjectBtn = document.createElement('button');

    //Add classes to elements
    addCardBtn.classList.add('add-card');
    delProjectBtn.classList.add('del-project');

    //Add IDs for task distinction
    addCardBtn.id = 'add-card';
    delProjectBtn.id = 'del-project';
    projectSelector.id = 'project-change';
    projectSelectorNew.id = 'add-project';

    //Add content to elements
    title.textContent = 'Project management';
    projectSelectorTxt.textContent = 'Which project are you working on?';
    addCardBtn.textContent = 'ADD TASK';
    delProjectBtn.textContent = 'DELETE ENTIRE PROJECT'
    projectSelectorNew.textContent = 'New project';

    defaultOption.text = 'Select a project...';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.hidden = true;

    projectSelector.add(defaultOption, 0);

    //Append elements
    projectSelectorGroup.appendChild(projectSelectorTxt);
    projectSelectorGroup.appendChild(projectSelector);
    projectSelectorGroup.appendChild(projectSelectorNew);


    wrapper.appendChild(title);
    wrapper.appendChild(projectSelectorGroup);
    wrapper.appendChild(addCardBtn);
    wrapper.appendChild(delProjectBtn);

}