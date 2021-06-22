import './'
import { useState, useEffect } from 'react'
import getPins from './getPins'
import "./App.css"

function App() {
  const [startingRow, setStartingRow] = useState(0)
  const [pins, setPins] = useState([])
  const [loading, setLoading] = useState(false)
  const loadedRowCount = 10

  const handleScroll = event => {
    if (window.document.body.offsetHeight <= window.pageYOffset + window.innerHeight){
      console.log('reached the bottom')
      setStartingRow(prev => prev + 10)
    }
  }

  window.addEventListener('scroll', handleScroll)

  useEffect(() => {
      const fetchPins = () => {
        const newPins = getPins(startingRow, startingRow + loadedRowCount)
        console.log(startingRow, startingRow + loadedRowCount)
        setPins(prev => [...prev, ...newPins])
      }
      console.log(startingRow, 'startingRow')
      fetchPins()
  }, [startingRow])
  
  return (
    
    <div className="App">
      <header className="App-header">
        <p>
          PINFINITY
        </p>
        {pins} 
    
        <div>{loading && 'Loading...'}</div>
      </header>
    </div>
  );
}

export default App;
