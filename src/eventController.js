import projectEventManager from './projectController.js';
import taskCreator from './taskCreator.js';
import taskEventManager from './taskController.js';
import dialogFormDom from './dialogFormDom.js';

export default function(event) {
    if (event.target.id.includes('project')) projectEventManager(event);
    if (event.target.id.includes('card')) taskCreator(event);
    if (event.target.id.includes('task')) taskEventManager(event);
} 