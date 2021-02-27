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
    
        const found = this.students.some( arrayToCheck => arrayToCheck.email === studentToRegister.email);
        if (found) {
            console.log(`${studentToRegister.name} is already registered for the ${this.level} ${this.name} course using ${studentToRegister.email}`);
            console.log(`We can't register them twice`);
            
        }
        else {
            console.log(`We have succesffuly registered ${studentToRegister.name} for the ${this.level} ${this.name} course under the ${studentToRegister.email} email address`);
            this.students.push(studentToRegister);
            console.log(this.students);
            
        }
        return ("Done running registerStudent");
    }
}
//I created some test students so it was easier than typing in the console developer tool
const testStudent1 = new Student ("Mike", "mike@mike.com", "student 1");
const testStudent2 = new Student ("John", "John@mike.com", "student 2");
const testStudent3 = new Student ("Frank", "Frank@mike.com", "student 3");
const testStudent4 = new Student ("James", "James@mike.com", "student 4");

//I created a new Bootcamp with an array of 3 of the 4 students so you could check for student 3 first and get the error message
//You can then add the student 3
const testingBootCamp = new Bootcamp ("Javascript React", "beginner", [testStudent4, testStudent1, testStudent2]);
const testingBootCamp2 = new Bootcamp ("Javascript React", "Beginner", testStudent4);

//This shows you who is in testingBootCamp to begin
console.log(`The list of students before checking if a student is already registered`);
console.log(`This should only have 3 students, student 1, 2, and 4`);
console.log(testingBootCamp.students);  

console.log(`You can test the script by doing a testingBootCamp.registerStudent(testStudent4) to get the already added message`);
console.log(`You can test the script by doing a testingBootCamp.registerStudent(testStudent3) to get the succesfully added message`);

//Still working on not returning undefined 