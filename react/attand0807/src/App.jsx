import { useState } from 'react'
import './App.css'

function App() {

  const [students, setStudents] = useState([
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
    { id: 16, name: '이재윤', present: false },
    { id: 17, name: '문채원', present: true },
    { id: 18, name: '장은호', present: false },
    { id: 19, name: '신다연', present: true },
    { id: 20, name: '백승우', present: false },
    { id: 21, name: '노지민', present: true },
    { id: 22, name: '황태현', present: true },
    { id: 23, name: '구하린', present: false }
  ]);

  // 출석 여부 바꾸기
  const handleCheckboxChange = (index) => {
    const newStudents = [...students];
    newStudents[index].present = !newStudents[index].present;
    setStudents(newStudents);
  };

  return (
    <div>
      <h1>출석부</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>출석</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={student.present}
                  onChange={() => handleCheckboxChange(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App
