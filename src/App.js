import { useState, useEffect } from 'react';
import video from './balloons.mp4';
import './App.css';


function App() {

  const [tips, setTips] = useState("");
  
  useEffect(() => {
  fetchTips();
  }, [])
  
  const fetchTips = async () => {
  const response = await fetch(`http://www.boredapi.com/api/activity/`);
  const data = await response.json();
  console.log(data.activity);
  setTips(data.activity)
  }
  return (
    <div className="App">
      <div className='container'>
      <video autoPlay muted loop>
      <source src={video} type="video/mp4" />
</video>
  <h3>{tips}</h3>
  </div>
  <div className='container'> 
<button onClick={fetchTips}>Click here for more advice</button>
      </div>
    </div>
  );
}

export default App;
