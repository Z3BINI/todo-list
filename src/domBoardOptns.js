export default function() {

    //Cache dom
    const wrapper = document.querySelector('.board-optns');

    //Create elements
    const title = document.createElement('h2');

    const projectSelectorGroup = document.createElement('div');
    const projectSelector = document.createElement('select');
    const projectSelectorTxt = document.createElement('p');

    const addCardBtn = document.createElement('button');
    const delProjectBtn = document.createElement('button');

    //Add classes to elements
    addCardBtn.classList.add('add-card');
    delProjectBtn.classList.add('del-project');

    //Add content to elements
    title.textContent = 'Project management';
    projectSelectorTxt.textContent = 'Which project are you working on?';
    addCardBtn.textContent = 'ADD TASK';
    delProjectBtn.textContent = 'DELETE ENTIRE BOARD'

    //Append elements
    projectSelectorGroup.appendChild(projectSelectorTxt);
    projectSelectorGroup.appendChild(projectSelector);


    wrapper.appendChild(title);
    wrapper.appendChild(projectSelectorGroup);
    wrapper.appendChild(addCardBtn);
    wrapper.appendChild(delProjectBtn);

}