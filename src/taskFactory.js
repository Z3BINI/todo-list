export default class Task {

    constructor(newTaskArr){
        this.title = newTaskArr[0];
        this.designation = newTaskArr[1];
        this.status = newTaskArr[2];
        this.importance = newTaskArr[3];
        this.board = newTaskArr[4];
        this.card = newTaskArr[5];
    }

    place() {
        if (this.status === 'Undefined') this.board.children[0].children[1].appendChild(this.card);     
        if (this.status === 'Doing') this.board.children[1].children[0].children[1].appendChild(this.card);
        if (this.status === 'Done') this.board.children[1].children[1].children[1].appendChild(this.card);
    }

    delete() {
        console.log('delete');
    }

    changeStatus() {
        console.log('change status');
    }

    changeImportance() {
        console.log('change importance');
    }

        
}


