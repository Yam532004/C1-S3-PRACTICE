let students = [
  { id: 1, name: "Trang", grade: "A" },
  { id: 2, name: "Hai", grade: "B" },
  { id: 3, name: "Linh", grade: "C" },
];

function updateStudentGrade(studentsArray, idToUpdate, newGrade) {
  const index = studentsArray.findIndex((student) => student.id === idToUpdate);
  if (index) {
    updateStudent = [...studentsArray];
    updateStudent[index].grade = newGrade;
  }
  return updateStudentGrade;
}
updateStudentGrade(students, 2, "A++");
console.log(students);
