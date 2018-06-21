import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  ampm: {
    fontSize: 16,
    verticalAlign: "middle"
  },
  summary: {
    width: "100%",
    display: "flex",
    alignItems: "center"
  },
  time: {
    paddingRight: theme.spacing.unit * 3,
    borderRight: "1px solid #e6e6e6"
  },
  title: {
    flex: 1,
    paddingLeft: theme.spacing.unit * 3
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  disabled:{
      opacity: '1 !important'
  }
});

class Favourites extends Component {
  state = {
    expanded: null
  };
  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };
  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    return (
      <Grid container spacing={16} justify="center">
        <Grid item xs={12}>
          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={this.handleChange("panel1")}
          >
            <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
              <div className={classes.summary}>
                <Typography variant="display1" className={classes.time}>
                  08:00 <span className={classes.ampm}>AM</span>
                </Typography>
                <Typography className={classes.title}>
                  I am an expansion panel
                </Typography>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel2"}
            onChange={this.handleChange("panel2")}
          >
            <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
              <div className={classes.summary}>
                <Typography variant="display1" className={classes.time}>
                  12:00 <span className={classes.ampm}>AM</span>
                </Typography>
                <Typography className={classes.title}>
                  I am an expansion panel
                </Typography>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </ExpansionPanelDetails>
            <Divider />
            <ExpansionPanelActions>
              <Button
                size="small"
                color="secondary"
                className={classes.button}
              >
                Favorite
              </Button>
              <Button
                size="small"
                color="default"
                className={classes.button}
              >
                Details
              </Button>
            </ExpansionPanelActions>
          </ExpansionPanel>
          <ExpansionPanel disabled={true}>
            <ExpansionPanelSummary className={classes.disabled}>
              <div className={classes.summary}>
                <Typography variant="display1" className={classes.time}>
                  8:00 <span className={classes.ampm}>AM</span>
                </Typography>
                <Typography className={classes.title}>
                  Break
                </Typography>
              </div>
            </ExpansionPanelSummary>
          </ExpansionPanel>
        </Grid>
      </Grid>
    );
  }
}

Favourites.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Favourites);
