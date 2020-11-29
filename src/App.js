import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [userid, setID] = useState([])
  const [sdata, setSdata] = useState([]);
  const IDRef = useRef()
  const APIURL = "scares-api-dev.us-east-1.elasticbeanstalk.com/getdata?user_id="

  //get the userID typed into the text box
  function handleID() {
 	const id = IDRef.current.value
	if (id === '') return
	setID(prevID => {
		return [id]
	})
	IDRef.current.value = null
  }

  //make call to database
  useEffect(() => { 
	fetch(`${APIURL}${userid}&time=${new Date().toISOString}`, {
		headers: {
			'Authorization' : 'Token'
		}
	})
	.then(res => res.json())
	.then(
		(result) => {
			setIsLoaded(true);
			setSdata(result)
		},
		(error) => {
			setIsLoaded(true);
			setError(error);
		}
	)
  }, [])


  return (
	<>
		<div>
		Stress Level Indicator	
		</div>
		<input ref={IDRef} type="text" />
		<button onClick ={handleID}>Enter ID</button>
		<li>
		User ID Entered: {userid}
		</li>
	</>
   )
}

export default App;
