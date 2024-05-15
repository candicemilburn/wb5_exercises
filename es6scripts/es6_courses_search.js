"use strict"

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];



//FOR EACH
let classroom1 = courses.filter((course) => {
    if (course.Location === "Classroom 1") {
        return true;
    }
    return false;
})

classroom1.forEach(function (course) {
    console.log(`${course.Title} is in classroom 1`)
})


console.log(`-------------------hello start over-------------------`)


// When does the PROG200 course start?
//(find)

function findProg200(course) {
       if (course.CourseId === "PROG200") {
        return true;
    }else{
    return false;
}
}
let find200c = courses.find(findProg200);

console.log(`The course start date for ${find200c.Title} is ${find200c.StartDate}`);


//filter 

function programTest(course) {
    if (course.CourseId === "PROG200") {
        return true;
    }else{ return false;

    }
}
let pro200 = courses.filter(programTest);
console.log(`the course named ${pro200[0].Title} starts on ${pro200[0].StartDate}`)

// What are the titles of the courses that cost $50 or less?

//filter example 
let coursesUnder50 = courses.filter((course) => {

    if(course.Fee <= 50 ){
        return true;
    }

    return false;

})
    console.log(coursesUnder50)



    let classroom1Courses = courses.filter((course) => {

        if(course.Location === "Classroom 1"){
            return true;
        }
       return false;
    
    })
        
    //done with a regular function instead of an arrow function (=>) like we did above
    classroom1Courses.forEach(function (course) {
        console.log(`${course.Title} is in Classroom 1`);
    })
    


