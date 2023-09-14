import './style.css';
import domStarter from './domStarter.js';
import domBoardOptns from './domBoardOptns.js';
import eventController from './eventController.js';

const init = (function(){

    //Start outter dom
    domStarter();
    //Start board options dom
    domBoardOptns();

    //Cache options DOM
    const btns = document.querySelectorAll('button');

    //Set event listeners
    btns.forEach(btn => btn.addEventListener('click', (event) => eventController(event)));

})();
