import React, { useState, useRef } from 'react';

function App() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [userid, setID] = useState([])
  const [sdata, setSdata] = useState([]);
  const IDRef = useRef()

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
	const response = await
	url = {"scares-api-dev.us-east-1.elasticbeanstalk.com/getdata?user_id=" +
		this.state.userid + "&time=" + new Date().toLocaleString() + "Z02"}
	fetch(url, {
		headers: {
			'Authorization' : 'Token'
		}
	}
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
		<res>
		Stress Level: {sdata}
		</res>
	</>
   )
}

export default App;
