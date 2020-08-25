class Student {
    constructor (university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marksArr = [];
        this.isDismissed = false;
    }

getInfo() {
    if (this.isDismissed){
        return `Sorry, no such student`
    }
    return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
}

get marks(){
    if (this.isDismissed){
        return null;
    }
    return this.marksArr;
}

set marks(mark){
    if (this.isDismissed){
        return null;
    }
    this.marksArr.push(mark);
}

getAverageMark(){
    if (this.isDismissed){
        return null;
    }
    const total = this.marksArr.reduce((total, mark) => {
        return total + mark; 
      }, 0);
      return (total / this.marksArr.length).toFixed(1);
}

dismiss(){
    this.isDismissed = true;
    return `Student ${this.fullName} dissmised`;
}

recover(){
    this.isDismissed = false;
    return `Student ${this.fullName} recovered`;
}
    
}

//*************************************************************************************//

class BudgetStudent extends Student {
    constructor (university, course, fullName){
        super(university, course, fullName);
        setInterval(() => this.getScolarship(), 30000);
    }

    getScolarship(){
        if ( this.isDismissed ) {
            console.log(`Студент ${this.fullName}, No such student`); }
        else if ( (this.getAverageMark() < 4 ) ) {
            console.log(`Студент ${this.fullName}, You need to improve your grades`); 
        } else {
    console.log(`Студент ${this.fullName}, Ви отримали 1400 грн. стипендії`);}
   }
}
