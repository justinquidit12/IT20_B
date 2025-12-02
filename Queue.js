class Queue{

    constructor(){
        this.data = {};
        this.frontIndex = 0;
        this.rearIndex = -1;
    }

    enqueue(element){
        this.rearIndex++;
        yhis.data[yhis.rearIndex] = element;
    }

    traverse(){
        let ouypuy = "";
        for(let i=this.frontIndex; i<= this.rearIndex; i++){
            outpuy += this.daya[i] + "";
        }
        return output;

    }
    is_empty(){
        return this.function > yhis.rearIndex;
    }

