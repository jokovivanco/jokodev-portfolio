import React from 'react'
import { Typography, Grid, useTheme, useMediaQuery } from '@material-ui/core'

import logos_javascript from '../../assets/logos_javascript.svg'
import logos_reactjs from '../../assets/logos_reactjs.svg'
import logos_express from '../../assets/logos_express.svg'
import logos_nodejs from '../../assets/logos_nodejs.svg'
import logos_mongo from '../../assets/logos_mongo.svg'
import logos_materialUi from '../../assets/logos_material-ui.svg'
import useStyles from './styles'

const Technologies = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <section className={classes.section}>
      <Typography variant="h3" align="center">Skills & Technologies</Typography>
      <Grid container direction="column" className={classes.sectionContainer} spacing={matchesXS ? undefined : 10}>
        <Grid item>
          <Grid container>
            <Grid item xs={12} sm={4} className={classes.item}>
              <div className={classes.imageContainer}>
                <img alt="javascript logo" src={logos_javascript} className={classes.logo} />
              </div>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.item}>
              <div className={classes.imageContainer}>
                <img alt="reactjs logo" src={logos_reactjs} className={classes.logo} />
              </div>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.item}>
              <div className={classes.imageContainer}>
                <img alt="express logo" src={logos_express} className={classes.logo} />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item xs={12} sm={4} className={classes.item}>
              <div className={classes.imageContainer}>
                <img alt="nodejs logo" src={logos_nodejs} className={classes.logo} />
              </div>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.item}>
              <div className={classes.imageContainer}>
                <img alt="mongo logo" src={logos_mongo} className={classes.logo} />
              </div>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.item}>
              <div className={classes.imageContainer}>
                <img alt="material-ui logo" src={logos_materialUi} className={classes.logo} />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}

export default Technologies
