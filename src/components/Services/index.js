import React from 'react'
import { Typography, Grid } from '@material-ui/core'

import useStyles from './styles'

const Services = () => {
  const classes = useStyles()

  return (
    <section className={classes.section}>
      <Typography variant="h3" align="center">What I can do with my team</Typography>
      <Grid container style={{ height: '60em' }}></Grid>
    </section>
  )
}

export default Services
