const aCourse = {
    name : 'Dynamic Web Fundamentals',
    code: 'WDD131',
    creadits : 2,
    sections: [
        {
            sectionNum: 1, 
            roomNum: 'STC 353', 
            enrolled: 26, 
            days: 'TTh',
            instructor: 'Bro T'
        },
         { 
            sectionNum: 2,
            roomNum: 'STC 347', 
            enrolled: 28, days: 'TTh', 
            instructor: 'Sis A'}
    ],
    enrolled: function(sectionNumber) {
        console.log(this.name);
    }
}

console.log(aCourse.name);

aCourse.enrolled(1);

document.querySelector("#enrollStudent").addEventListener("click", (e) => {
    let sectionNumber = document.querySelector("#sectionNumber").value.trim();

    aCourse.sections.forEach(section => {
        if(section.sectionNum == sectionNumber){
            section.enrolled += 1;
        }
        console.log(section.sectionNum)
        console.log(section.enrolled);
    })
});

