import React, { Component } from "react";
import LazyLoad from 'react-lazyload';
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Route, Redirect, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import NavTabs from "../components/NavTabs";
import HeroBanner from "../components/HeroBanner";
import BannerImage from "../assets/images/bg8.jpg";
import WninLogo from "../assets/images/wnin_logo.png";
import Agenda from "./Agenda";
import Schedule from "./Schedule";
import Favourites from "./Favourites";
import LoadableMyPass from "../loadable/LoadableMyPass";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit,
    maxWidth: "1200px",
    margin: "0 auto",
    flexShrink: 0,
    marginTop: "-32px"
  },
  routeBody: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 2,
    minHeight: "1000px"
  }
});

const routeMapping = {
  schedule: <Schedule />,
  favourites: <Favourites />,
  agenda: <Agenda />,
  mypass: <LoadableMyPass />
};

class Homepage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <HeroBanner imageSrc={BannerImage}>
            <LazyLoad height={200}>
                <img src={WninLogo} alt="Logo"/>
            </LazyLoad>
        </HeroBanner>
        
        <main className={classes.root}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Paper elevation={4}>
                <NavTabs />
              </Paper>
              <div className={classes.routeBody}>
                <Switch>
                  <Route
                    path="/home/:tab"
                    exact
                    render={({ match }) => {
                      const tab = match.params.tab;
                      if (routeMapping[tab]) {
                        return routeMapping[tab];
                      } else {
                        return <Redirect to="/home/agenda" />;
                      }
                    }}
                  />
                  <Redirect from="/home" to="/home/agenda" />
                </Switch>
              </div>
            </Grid>
          </Grid>
        </main>
      </React.Fragment>
    );
  }
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withStyles(styles)(Homepage);
