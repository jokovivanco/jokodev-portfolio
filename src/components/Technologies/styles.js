import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  section: {
    marginTop: '20em'
  },
  sectionContainer: {
    width: '80%',
    margin: 'auto',
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      width: '90%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '250px',
    height: '250px',
    [theme.breakpoints.down('xs')]: {
      width: '400px',
      height: '400px'
    }
  },
  logo: {
    width: '200px',
    height: '200px',
    [theme.breakpoints.down('md')]: {
      width: '150px',
      height: '150px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '125px',
      height: '125px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '300px',
      height: '300px'
    },
  }
}))