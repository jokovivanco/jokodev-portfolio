import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  paper: {
    width: '50%',
    margin: 'auto',
    position: 'relative',
    top: -70,
    [theme.breakpoints.down('lg')]: {
      width: '80%',
      top: -60
    },
    [theme.breakpoints.down('md')]: {
      width: '95%'
    }
  }
}))