import React, { useState } from 'react'
import { AppBar, Toolbar, Tabs, Tab, Button, useMediaQuery, useTheme, SwipeableDrawer, List, ListItem, ListItemText, IconButton, useScrollTrigger, CssBaseline } from '@material-ui/core'
// import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'

import logo from '../../assets/logo.svg'

import useStyles from './styles'

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Navbar = (props) => {
  const { handleScrollToElement } = props

  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const menus = [
    { path: '/', label: 'Home', elementName: 'back-to-top-anchor' },
    { path: '/projects', label: 'Projects', elementName: 'projects' },
    { path: '/contact', label: 'Contact', elementName: 'contact' }
  ]

  const cta = { path: '/greet', label: 'Greet Me' }

  const [selectedTab, setSelectedTab] = useState(0)
  const [openDrawer, setOpenDrawer] = useState(false)

  const handleSelectedTab = (e, newValue) => setSelectedTab(newValue)

  const onCloseDrawer = async (e, selector) => {
    await handleScrollToElement(e, selector)
  }
  const toggleDrawer = () => setOpenDrawer(!openDrawer)

  const tabs = (
    <React.Fragment>
      <Tabs
        value={selectedTab}
        onChange={handleSelectedTab}
        aria-label="tabs"
        TabIndicatorProps={{ children: <span /> }}
        classes={{ indicator: classes.indicator }}
      >
        {menus.map(menu => (
          <Tab onClick={e => handleScrollToElement(e, menu.elementName)} key={menu.label} label={menu.label} className={classes.tab} classes={{ selected: classes.tabSelected }} />
        ))}
      </Tabs>
      <Button variant="contained" className={classes.greetButton} color="primary" disableElevation>{cta.label}</Button>
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbar} />
        <List disablePadding>
          {menus.map((menu, i) => (
            <ListItem
              key={i}
              className={classes.drawerItem}
              onClick={e => onCloseDrawer(e, menu.elementName)}
              divider
              button
            // component={Link}
            // to={menu.to}
            >
              <ListItemText disableTypography>{menu.label}</ListItemText>
            </ListItem>
          ))}
          <ListItem
            className={`${classes.drawerItem} ${classes.drawerItemGreetMe}`}
            onClick={e => onCloseDrawer(e, cta.elementName)}
            divider
            button
          // component={Link}
          // to="/estimate"
          >
            <ListItemText disableTypography>Greet Me</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer} onClick={toggleDrawer} disableRipple >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  )

  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="fixed" color="transparent" elevation="0" className={classes.appBar}>
          <img alt="my logo" src={logo} className={classes.logo} />
          {matchesSM ? drawer : (
            <Toolbar>
              {tabs}
            </Toolbar>
          )}
        </AppBar>
      </ElevationScroll>
    </>
  )
}

export default Navbar
