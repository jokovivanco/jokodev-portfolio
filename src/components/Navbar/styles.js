import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  appBar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: '1em 64px',
    fontFamily: 'Nunito',
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      padding: '1em 24px'
    }
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: theme.palette.primary.main,
    }
  },
  greetButton: {
    color: 'white',
    marginLeft: '2em',
    textTransform: 'capitalize',
    fontSize: '1rem',
  },
  ctaButtonDrawer: {
    backgroundColor: 'blue'
  },
  logo: {
    height: '80px'
  },
  tab: {
    textTransform: 'capitalize',
    fontSize: '1rem'
  },
  tabSelected: {
    fontWeight: 700
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  drawerIcon: {
    height: '50px',
    width: '50px'
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
    width: 200
  },
  drawerItem: {
    color: 'white',
    opacity: 0.7,
    textAlign: 'center'
  },
  drawerItemGreetMe: {
    backgroundColor: theme.palette.primary.light
  }
}))