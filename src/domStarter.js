import logoSvg from './img/logo.svg';

export default function() {
    
    //Cache DOM
    const body = document.querySelector('body');

    //Create elements
    //Main structure
    const wrapper = document.createElement('div');

    const header = document.createElement('div');
    const main = document.createElement('div');
    const footer = document.createElement('div');

    const boardOptns = document.createElement('div');
    const board = document.createElement('div');

    //Inner content elements
    const logo = document.createElement('div');
    const logoImg = document.createElement('img');
    const logoTxt = document.createElement('p');

    //Add relevant classes
    //Main structure
    wrapper.classList.add('wrapper');
    
    header.classList.add('header');
    main.classList.add('main');
    footer.classList.add('footer');

    boardOptns.classList.add('board-optns');
    board.classList.add('board');

    //Inner content
    logo.classList.add('logo');
    
    //Add content to elements
    logoImg.src = logoSvg;
    logoTxt.textContent = 'TheTooDooList';

    //Append elements to their respective fathers
    //Main structure
    body.appendChild(wrapper);

    wrapper.appendChild(header);
    wrapper.appendChild(main);
    wrapper.appendChild(footer);

    header.appendChild(logo);

    main.appendChild(boardOptns);
    main.appendChild(board);

    //Inner content
    logo.appendChild(logoImg);
    logo.appendChild(logoTxt);

};