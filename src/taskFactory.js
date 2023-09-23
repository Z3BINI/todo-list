export default class Task {

    constructor(title, designation, importance, status){
        this.title = title;
        this.designation = designation;
        this.importance = importance;
        this.status = status;
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


