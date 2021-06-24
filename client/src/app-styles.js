import { fade, makeStyles } from '@material-ui/core/styles'
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
  });

const useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 55,
      width: '100%',
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
  }));


  export {
      useStyles,
      theme
  }