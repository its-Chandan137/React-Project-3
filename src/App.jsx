import React,{useState} from 'react'
import Use from './Use'
import Students from './Students'

function App() {
  const [name,setName] = useState("Gojo")
  return (
    <div>
      {/* <h2>Hello</h2> */}
      <h3>There are two functions Doing their tasks in changing the outcome</h3>
      <Use/>
      <Students name = {name} email = "thestrongest@youaretoo.weak" other= {{addr: 'Sibuya', killcount: 5000}}/>
      <Students name = "Itachi" email = "mangekyou@clan.killer" other= {{addr: 'Leaf village', killcount: 7000}}/>
      <button onClick={() => {setName("Sukuna")}}>Update Me</button>
    </div>
  )
}

export default App