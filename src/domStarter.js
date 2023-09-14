export default function() {
    
    //Cache DOM
    const body = document.querySelector('body');

    //Create elements
    const wrapper = document.createElement('div');

    const header = document.createElement('div');
    const main = document.createElement('div');
    const footer = document.createElement('div');

    const boardOptns = document.createElement('div');
    const board = document.createElement('div');

    //Add relevant classes
    wrapper.classList.add('wrapper');
    
    header.classList.add('header');
    main.classList.add('main');
    footer.classList.add('footer');

    boardOptns.classList.add('board-optns');
    board.classList.add('board');

    //Append elements to their respective fathers
    body.appendChild(wrapper);

    wrapper.appendChild(header);
    wrapper.appendChild(main);
    wrapper.appendChild(footer);

    main.appendChild(boardOptns);
    main.appendChild(board);

    console.log('how many tims');
};