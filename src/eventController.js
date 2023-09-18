import projectEventManager from './projectController.js';


export default function(event) {
    if (event.target.id.includes('project')) projectEventManager(event);
    
}