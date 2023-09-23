import projectEventManager from './projectController.js';
import taskEventManager from './taskController.js';

export default function(event) {
    if (event.target.id.includes('project')) projectEventManager(event);
    if (event.target.id.includes('task')) taskEventManager(event);
} 