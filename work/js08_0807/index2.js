const students = [
  { id: 1, name: '홍길동', present: true },
  { id: 2, name: '김철수', present: true },
  { id: 3, name: '이영희', present: false },
  { id: 4, name: '박지민', present: true },
  { id: 5, name: '최윤서', present: false },
  { id: 6, name: '정하늘', present: true },
  { id: 7, name: '한지우', present: false },
  { id: 8, name: '이도현', present: true },
  { id: 9, name: '김하진', present: true },
  { id: 10, name: '배서연', present: false },
  { id: 11, name: '오예린', present: true },
  { id: 12, name: '윤지호', present: false },
  { id: 13, name: '강민준', present: true },
  { id: 14, name: '서하늘', present: false },
  { id: 15, name: '조수아', present: true },
];

const tableBody = document.querySelector('#attendanceTable tbody');

function renderAttendance(students) {
  tableBody.innerHTML = '';

  students.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.id}</td>
      <td><label class="form-check-label" for="flexCheckChecked${student.id}">${student.name}</label></td>
      <td>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked${student.id}" ${student.present ? 'checked' : ''}>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

function toggleAttendance(id) {
  const student = students.find(s => s.id === id);
  if (student) {
    student.present = !student.present;
    renderAttendance(students);
  }
}

renderAttendance(students);
