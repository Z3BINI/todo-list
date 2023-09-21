import './style.css';
import domStarter from './domStarter.js';
import domBoardOptns from './domBoardOptns.js';
import eventController from './eventController.js';

(function(){

    //Start outter dom
    domStarter();
    //Start board options dom
    domBoardOptns();

    //Cache options DOM
    const btns = document.querySelectorAll('button');
    const select = document.querySelector('select');
    

    //Set event listeners
    btns.forEach(btn => btn.addEventListener('click', (event) => eventController(event)));
    select.addEventListener('change', (event) => eventController(event));

})();
