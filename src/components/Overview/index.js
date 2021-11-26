import React from 'react'
import { Paper, Card, CardContent, Typography } from '@material-ui/core'

import useStyles from './styles'

const Overview = () => {
  const classes = useStyles()

  return (
    <Paper elevation={1} className={classes.paper}>
      <Card>
        <CardContent>
          <Typography variant="subtitle1" style={{ color: 'white' }}>
            I’ve been fallin’ in love with this MERN Technology. It’s using fully JavaScript for their environment which is my only favorite language to learn.
            JavaScript can do a lot of things now if we compared to the late JavaScript that only can do things just in a browser.
            As time goes, JavaScript been growing a lot and has its own environment and the world gave birth to the new JavaScript.
            One of its technology was MERN Techonolgy that we know at this age.
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  )
}

export default Overview
