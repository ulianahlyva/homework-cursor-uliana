  const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }]; 
  //11111
  let obj;
 for (let i = 0; i < students.length; i++) {
 obj = Object.keys(students[i].subjects);
 const getSubjects = obj.map(el => (el.charAt(0).toUpperCase() + el.slice(1)).replace('_', ' '));
 //console.log(getSubjects);
 document.writeln('Студент:' + '<b>' +`${students[i].name}` +'</b>' +'. Список предметів'  + getSubjects + '<br>');
 } 

 //22222
let marks; let averangeMark;
function getAverange() {
  let sum = 0;
for (let i =0; i < students.length; i++) {
    marks = Object.values(students[i].subjects).reduce((a, b) => a.concat(b));
    sum = marks.reduce((markStud, currValue) => markStud+currValue);
    averangeMark = (sum/marks.length).toFixed(2);
   document.writeln('Студент:' +'<b>' +`${students[i].name}`+'</b>'  +'. Середня оцінка:'  + averangeMark + '<br>');
   students[i].averMark = averangeMark;
  }
 return averangeMark;
}
console.log(getAverange());


//33333

console.log(`${JSON.stringify(students, ['name', 'course', 'averMark'])}`);

for (let i =0; i < students.length; i++) {
  let student ;
const getStudentInfo = (student) => {
student = {
 nameSt : students[i].name,
 courseSt: students[i].course,
 averMarkSt: students[i].averMark
}
return student;
}
console.log(getStudentInfo(student));
}
document.writeln( 'Інформація про студентів: <b>in console</b>.'+'<br>');

//444444444444
 
const getStudentsNames = students.map(student =>{ return student.name});
//console.log(getStudentsNames.sort());
document.writeln( 'Імя студентів за алфавітом:' +' '+ getStudentsNames.sort()+'<br>');

//55555555
let bestSt;
const getBestStudent = (bestSt) =>{
  for (let i = 0; i < students.length; i++) {
      for (let j = 1; i < students.length-1; i++) {        
              if(students[i].averMark > students[i+j].averMark){
                bestSt = students[i].name;
               // console.log(bestSt);
              }else if(students[i].averMark < students[i+j].averMark){
                bestSt = students[i+j].name;
               // console.log(bestSt);
              }
      }
  }
  return bestSt;
}
console.log(getBestStudent(bestSt));
document.writeln('Найкращий студент:'+ getBestStudent(bestSt)+'<br>');

//66666666666
let word = 'тест';
function calculateWordLetters(word) {
 let string = word.split('');
  let letterCount = {};
  for (word of string) {
    if (letterCount[word]) {
      letterCount[word]++;
    }else{
      letterCount[word] = 1;
    }
  }
  return letterCount;
}

console.log(calculateWordLetters(word));
document.writeln( 'Кількість букв у слові тест <b>in console</b>.');