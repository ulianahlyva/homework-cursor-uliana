const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]; 
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"]; 
const marks = [4, 5, 5, 3, 4, 5];
//групування студентів за статтю
const girl =students.filter(el => el === "Олена" || el === "Іра" || el === "Світлана");
const boy = students.filter(el => el === "Олександр" || el === "Ігор" || el === "Олексій");
console.log(girl);
console.log(boy);


//розбиття студентів на пари 
const pairs = [];
function pairsStud(pairs) {
for (let i = 0; i < girl.length ; i++){
pairs.push([girl[i] +' i ' + boy[i]]); 
}
return pairs;
}
console.log(pairsStud(pairs));
document.writeln(`<p><b>Пари студентів:</b>  ${pairs} <br>`);

//студенти і їхні проекти
const project = [];
function projectThemes(project) {
for (let i = 0; i < themes.length ; i++){
project.push([pairs[i] +': ' + themes[i]]); 
}
return project;
}
console.log(projectThemes(project));
for(projects of project){
document.writeln(`<p><b>Пари студентів, їх проект:</b>  ${projects} <br>`);
}


//оцінка кожного студента
const mark =[];
function markStudents(mark) {
for (let i = 0; i < students.length ; i++){
mark.push([students[i] +' - ' + marks[i]]); 
}
return mark;
}
console.log(markStudents(mark) );

document.writeln(`<p><b>Оцінка кожного студента:</b>  ${mark} <br>`);

//випадкова оцінка кожній парі
const pairsMarks = [];
function pairsMarksStudents(pairsMarks) {
for (let i = 0; i < project.length ; i++){
	let random = Math.floor(Math.random() * 5) + 1;
pairsMarks.push([project[i] +' - ' + random]); 
}
return pairsMarks;
}
console.log(pairsMarksStudents(pairsMarks));
for(pairMark of pairsMarks){
document.writeln(`<p><b>Оцінка пар студентів за проект:</b>  ${pairMark} <br>`);
}