import projectController from './projectController.js';

export default function(event) {
    if (event.target.classList.value === 'add-board') projectController();
}