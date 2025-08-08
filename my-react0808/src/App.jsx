import { useState } from 'react'
import './Componenets/css/style.css'
import Library from './Componenets/Library'
import ConfirmDialog from './Componenets/ConfirmDialog'
import BoxList from './Componenets/BoxList'
import RenoCars from './Componenets/RenoCars'

function App() {
  return (
    <>
      {/* <h2>설레는 다음 여행을 위한 아이디어</h2>
      <BoxList num="4"/>
      {/* <Library /> */}
      {/* <Book/> */}
      {/* <ConfirmDialog/> */}
      {/* <h2>에어비엔비 체험 둘러보기</h2> */}
      {/* <BoxList num="2"/> */} 
      <RenoCars/>
    </>
  )
}

export default App
