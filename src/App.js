import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline, useScrollTrigger, Fab, Toolbar, Zoom } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

import theme from './Theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Services from './components/Services'
import Footer from './components/Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

const App = (props) => {
  const handleScrollToElement = (event, selector) => {
    const anchor = (event.target.ownerDocument || document).querySelector(`#${selector}`);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Navbar
          handleScrollToElement={handleScrollToElement}
        />
        <Toolbar id="back-to-top-anchor" />
        <Hero />
        <Overview />
        <Technologies />
        <Projects />
        <Services />
        <Footer />
        <ScrollTop {...props}>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon style={{ color: 'white' }} />
          </Fab>
        </ScrollTop>
      </ThemeProvider>
    </>
  )
}

export default App
