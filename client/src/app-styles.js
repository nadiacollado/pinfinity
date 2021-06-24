import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ff4400',
      },
      secondary: {
        main: '#11cb5f',
      },
    },
  })

const useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
      width: '100%',
      fontStyle:"oblique",
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '20%',
      position: 'relative',
      pointerEvents: 'none',
      display: 'flex',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
    },
  }))


  export {
      useStyles,
      theme
  }