import React from 'react'
import { Typography, Grid } from '@material-ui/core'

import useStyles from './styles'

const Projects = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.customToolbar} id="projects" />
      <section className={classes.section}>
        <Typography variant="h3" align="center">Finished Projects</Typography>
        <Grid container style={{ height: '60em' }}></Grid>
      </section>
    </>
  )
}

export default Projects
