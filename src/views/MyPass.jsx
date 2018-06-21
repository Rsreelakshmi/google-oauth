import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  card: {
    maxWidth: 320
  },
  media: {
    height: 272,
    width: 272
  },
  caption: {
    width: "100%"
  }
});

class MyPass extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={16} justify="center">
        <Grid item>
          <Card className={classes.card}>
            <CardHeader
              avatar={<Avatar aria-label="Recipe">R</Avatar>}
              title="John Doe AKA"
              subheader="john_doe@gmail.com"
            />
            <Divider />
            <CardContent>
              <CardMedia
                className={classes.media}
                image="http://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=12345678&qzone=1&margin=0&size=400x400&ecc=L"
                title="QR Code"
              />
            </CardContent>
            <Divider />
            <CardActions>
              <Typography
                variant="caption"
                align="center"
                component={"p"}
                className={classes.caption}
              >
                Dolor reprehenderit incididunt proident exercitation.
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

MyPass.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyPass);
