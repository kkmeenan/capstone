import React, { useState, useRef } from 'react';

function App() {
  const [userid, setID] = useState([])
  const IDRef = useRef()

  function handleID() {
 	const id = IDRef.current.value
	if (id === '') return
	setID(prevID => {
		return [id]
	})
	IDRef.current.value = null
  }

  return (
	<>
		<div>
		Stress Level Indicator	
		</div>
		<input ref={IDRef} type="text" />
		<button onClick ={handleID}>Enter ID</button>
	</>
   )
}

export default App;
