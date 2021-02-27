class Student {
    constructor (name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor (name, level, students = [])
    {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent (studentToRegister) {
        console.log("You madeit to the method");
        console.log(studentToRegister.email);
        new studentToRegisterArray = Object.keys(studentToRegister);
        console.log(studentsToRegisterArray);
    }
}

const testStudent1 = new Student ("Mike", "mike@mike.com", "March 1st");
const testStudent2 = new Student ("John", "John@mike.com", "March 1st");
const testStudent3 = new Student ("Frank", "Frank@mike.com", "March 1st");
const testStudent4 = new Student ("James", "James@mike.com", "March 1st");
const testingBootCamp = new Bootcamp ("Javascript React", "Begginer", testStudent4);
const testingBootCamp2 = new Bootcamp ("Javascript React", "Begginer", testStudent4);