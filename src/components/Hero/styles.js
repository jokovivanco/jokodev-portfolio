import { makeStyles } from '@material-ui/core'

import pattern from '../../assets/pattern.svg'

export default makeStyles(theme => ({
  heroContainer: {
    height: '65em',
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 62%',
    backgroundSize: '80%',
    backgroundColor: theme.palette.secondary.main,
    margin: 0
  },
  heroContainerSub: {
    height: '100%'
  },
  heroContent: {
    textAlign: 'center',
    width: '100%'
  },
  avatar: {
    height: '25em',
    [theme.breakpoints.down('sm')]: {
      height: '12em',
      marginTop: '2em'
    },
    [theme.breakpoints.down('xs')]: {
      height: '8em'
    }
  },
  lead: {
    fontWeight: 500,
    [theme.breakpoints.down('xs')]: {
      fontSize: '2em'
    }
  },
  jobTitle: {
    fontWeight: 700,
    [theme.breakpoints.down('xs')]: {
      fontSize: '3em'
    }
  }
}))