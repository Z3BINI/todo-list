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

        if (this.importance === 'Low') this.card.style = 'border: 2px solid blue;';
        if (this.importance === 'Medium') this.card.style = 'border: 2px solid yellow;';
        if (this.importance === 'High') this.card.style = 'border: 2px solid red;';
    }

    addEventListeners() {
        //Store the card's option elements
        const delBtn = this.card.querySelector('button.del');
        const changeStatusSelect = this.card.querySelector('select.change-stat');
        const changeImportanceSelect = this.card.querySelector('select.change-imp');

        delBtn.addEventListener('click', () => this.delete(this.card));
        changeStatusSelect.addEventListener('change', (event) => this.changeStatus(this, event));
        changeImportanceSelect.addEventListener('change', (event) => this.changeImportance(this, event));

    }

    delete(card) {
        card.remove();
    }

    changeStatus(card, event) {
        card.status = event.target.value;
        card.place();    
    }

    changeImportance(card, event) {
        card.importance = event.target.value;
        card.place();
    }

        
}


