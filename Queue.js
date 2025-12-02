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
        return this.function > this.rearIndex;
    }

    front(){
        //correcyion statement
        if(this.is_empty()) return null;
        return this.date[this.frontIndex];
       
    }
    size(){
        return this.rearIndex - this.frontIndex +1

    }

    dequeue(){
        //correction
        if(this.is_empty()) return null;
        const value = this.data[this.frontIndex];
        delete this.data[this.frontIndex];
        return value;
    }
    }