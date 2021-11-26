import React from 'react'
import { Typography, IconButton, Grid } from '@material-ui/core'

import github from '../../assets/akar-icons_github-fill.svg'
import linkedin from '../../assets/akar-icons_instagram-fill.svg'
import instagram from '../../assets/akar-icons_linkedin-fill.svg'
import useStyles from './styles'

const Footer = () => {
  const classes = useStyles()

  return (
    <section className={classes.section} id="contact">
      <div className={classes.sectionContainer}>
        <Typography variant="h6" align="center" >Follow my social media<br />to know me more</Typography>
        <Grid container justifyContent="center" alignItems="center" spacing={4} style={{ marginTop: '2em', width: '100%' }}>
          <Grid item>
            <IconButton className={classes.imageButton}>
              <img alt="github logo" src={github} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton className={classes.imageButton}>
              <img alt="github logo" src={linkedin} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton className={classes.imageButton}>
              <img alt="github logo" src={instagram} />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </section>
  )
}

export default Footer
