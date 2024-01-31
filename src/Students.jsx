import React from 'react'

function Students(props) {
  console.log(props)
  return (
    <div style = {{backgroundColor: "skyblue", padding : 5, marginTop: 10}}>
      <h1>Name: {props.name}</h1>
      <h2>Email: {props.email}</h2>
      <h4>Address: {props.other.addr}</h4> 
      <h4>Kill Count: {props.other.killcount}</h4> 
    </div>
  )
}

export default Students;