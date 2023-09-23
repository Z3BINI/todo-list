import projectEventManager from './projectController.js';
import taskEventManager from './taskCreator.js';

export default function(event) {
    if (event.target.id.includes('project')) projectEventManager(event);
    if (event.target.id.includes('card')) taskEventManager(event);
} 