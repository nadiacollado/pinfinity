import './'
import { useState, useEffect, useRef } from 'react'
import getPins from './getPins'
import Pins from './Pins'
import './app.css'
import { theme, useStyles } from './app-styles'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { ThemeProvider } from '@material-ui/styles';


function App() {
  const classes = useStyles();
  const [startingRow, setStartingRow] = useState(0)
  const [pins, setPins] = useState([])
  const loadedRowCount = 10
  let isLoading = useRef(false)


  // calls for new pins everytime state (startingRow) is updated
  useEffect(() => {
      const fetchPins = () => {
        const newPins = getPins(startingRow, startingRow + loadedRowCount)
        setPins(prev => [...prev, ...newPins])
      }
      fetchPins()
      isLoading = false
  }, [startingRow])


  // checks if the user has reached the bottom of the page
  // if so, increases startingRow by 10
  const handleScroll = () => {
    if (!isLoading && window.document.body.offsetHeight <= window.pageYOffset + window.innerHeight){
      isLoading = true
      setStartingRow(prev => prev + 10)
    }
  }

  window.addEventListener('scroll', handleScroll)


  return (
  <ThemeProvider theme={theme}>
    <div className='App'>
      <div className='App-header'>
        <h3>Pinfinity</h3> 
        <div className={classes.search}>
          <div className={classes.searchIcon}></div>
            <InputBase
              placeholder='…and beyond'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'arial-label': 'search' }}
            />
        </div>
          <IconButton color='inherit'>
            <Badge badgeContent={4} color='secondary'>
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton color='inherit'>
            <Badge badgeContent={17} color='secondary'>
              <NotificationsIcon />
            </Badge>
          </IconButton>
            <IconButton
              color='inherit'
            >
            <AccountCircle />
          </IconButton>
        </div>
        <div className='pins'>
          <Pins pins={pins}/>
        </div>
    </div>
  </ThemeProvider>
  )
}

export default App
