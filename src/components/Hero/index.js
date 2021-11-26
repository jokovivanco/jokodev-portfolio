import React from 'react'
import { Grid, Typography } from '@material-ui/core'


import avatar from '../../assets/avatar.svg'
import useStyles from './styles'

const Hero = ({ ref }) => {
  const classes = useStyles()

  return (
    <header className={classes.heroContainer} id="home">
      <Grid container justifyContent="center" alignItems="center" className={classes.heroContainerSub}>
        <Grid container item direction="column" className={classes.heroContent} spacing={10}>
          <Grid item>
            <Typography variant="h4" className={classes.lead} gutterBottom >Hi! My name is Joko</Typography>
            <Typography variant="h2" className={classes.jobTitle}>MERN Stack Web Developer</Typography>
          </Grid>
          <Grid item>
            <img alt="profile" src={avatar} className={classes.avatar} />
          </Grid>
        </Grid>
      </Grid>
    </header>
  )
}

export default Hero
