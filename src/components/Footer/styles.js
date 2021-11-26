import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  section: {
    backgroundColor: theme.palette.common.black,
    height: '30em'
  },
  sectionContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
    height: '100%'
  },
  imageButton: {
    borderRadius: 50,
    padding: '25px',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light
    }
  }
}))