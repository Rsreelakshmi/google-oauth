import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MUITabs from "@material-ui/core/Tabs";
import MUITab from "@material-ui/core/Tab";
import withWidth from "@material-ui/core/withWidth";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actionUpdateTab } from "../store/actions";

const styles = {
  root: {
    flexGrow: 1
  }
};

class NavTabs extends Component {
  handleChange = (event, value) => {
    const { history, updateTab } = this.props;
    updateTab(value);
    history.push(`/home/${value}`);
  };
  render() {
    const { classes, width, tab } = this.props;
    return (
      <div className={classes.root}>
        <MUITabs
          value={tab}
          onChange={this.handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered={width !== "xs"}
          scrollable={width === "xs"}
        >
          <MUITab label="Agenda" value="agenda" />
          <MUITab label="Schedule" value="schedule" />
          <MUITab label="Favorites" value="favourites" />
          <MUITab label="My Pass" value="mypass" />
        </MUITabs>
      </div>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  updateTab: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  tab: state.tab.value
});

const mapDispatchToProps = dispatch => ({
  updateTab: (tabValue) => {
    dispatch(actionUpdateTab(tabValue));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withWidth()(withRouter(NavTabs))));
