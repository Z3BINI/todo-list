import logoSvg from './img/logo.svg';
import dialogElement from './dialogFormDom.js';

export default function() {
    
    //Cache DOM
    const body = document.querySelector('body');

    //Create elements
    //Main structure
    const wrapper = document.createElement('div');
    
    //Create dialog & form DOM
    const dialogForm = dialogElement(); 

    const header = document.createElement('div');
    const main = document.createElement('div');
    const footer = document.createElement('div');

    const boardOptns = document.createElement('div');
    const board = document.createElement('div');

    //Inner content elements
    const logo = document.createElement('div');
    const logoImg = document.createElement('img');
    const logoTxt = document.createElement('p');

    const footerTxt = document.createElement('p');

    //Add relevant classes
    //Main structure
    wrapper.classList.add('wrapper');
    
    header.classList.add('header');
    main.classList.add('main');
    footer.classList.add('footer');

    boardOptns.classList.add('board-optns');
    board.classList.add('board');

    //Inner content classes
    logo.classList.add('logo');
    
    //Add content to inner elements
    logoImg.src = logoSvg;
    logoTxt.innerHTML = 'The<br>TooDoo<br>List';

    footerTxt.innerHTML = 'Made by <a href="https://github.com/Z3BINI/">Z3BINI</a>';

    //Append elements to their respective fathers
    //Main structure
    body.appendChild(wrapper);
    body.appendChild(dialogForm); 

    wrapper.appendChild(header);
    wrapper.appendChild(main);
    wrapper.appendChild(footer);

    header.appendChild(logo);

    main.appendChild(boardOptns);
    main.appendChild(board);

    //Inner content
    logo.appendChild(logoImg);
    logo.appendChild(logoTxt);

    footer.appendChild(footerTxt);
};