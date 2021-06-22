import './'
import { useState, useEffect, useRef } from 'react'
import getPins from './getPins'
import "./App.css"

function App() {
  const [startingRow, setStartingRow] = useState(0)
  const [pins, setPins] = useState([])
  const loadedRowCount = 10
  let isLoading = useRef(false)

  useEffect(() => {
      const fetchPins = () => {
        const newPins = getPins(startingRow, startingRow + loadedRowCount)
        setPins(prev => [...prev, ...newPins])
      }
      fetchPins()
      isLoading = false
  }, [startingRow])

  const handleScroll = () => {
    if (!isLoading && window.document.body.offsetHeight <= window.pageYOffset + window.innerHeight){
      console.log('reached the bottom')
      isLoading = true
      setStartingRow(prev => prev + 10)
    }
  }

  window.addEventListener('scroll', handleScroll)

  return (
    
    <div className="App">
      <header className="App-header">
        <p> PINFINITY </p>
          {pins}
      </header>
    </div>
  );
}

export default App;
