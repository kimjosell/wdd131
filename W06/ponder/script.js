let courses = ["Course1", "Course2", "Course3"];

console.log(courses[4]);
let courseAndGPA = [
    {
    courseName: "Course",
    courseGPA: 3.7,
    professor: "Brother Warner"
    },
    {
        courseName: "WDD231",
        courseGPA: 4,
        professor: "Brother Warner"
    }
];

console.log(courseAndGPA);

console.log(courseAndGPA.courseName);

//Chalenge Retreive the course name fo the second item in the array of objects and print to screen

console.log(coursesAndGPA[1].courseName)


function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}


const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];


const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];
          

