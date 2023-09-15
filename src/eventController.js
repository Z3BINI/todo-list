import { eventManager as projectEventManager } from './projectController.js';


export default function(event) {
    if (event.target.textContent.toLowerCase().includes('project')) projectEventManager(event.target.classList.value);
    
}