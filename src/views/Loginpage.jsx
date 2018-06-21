import React, { Component } from "react";
import LazyLoad from 'react-lazyload';
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import GoogleLogin from 'react-google-login';
import { Route, Redirect, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import HeroBanner from "../components/HeroBanner";
import BannerImage from "../assets/images/bg8.jpg";
import WninLogo from "../assets/images/wnin_logo.png";
import LoadableHomepage from "../loadable/LoadableHomepage";

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


class Loginpage extends Component {
  constructor(props){
    super(props);
    this.state ={
     loginError: false,
     loginSuccess: false 
    };
    this.signup = this.signup.bind(this);
    
  }
  signup(res, type){

    let postData;
    if(type === 'google' && res.w3.U3){
      postData = {name: res.w3.ig, provider: type, email:res.w3.U3 , provider_id:res.El, token:res.Zi.access_token , provider_pic:res.w3.Paa }; 
    }

    if(postData){
      console.log(postData);
      sessionStorage.setItem("userData", JSON.stringify(postData));
      this.setState({loginSuccess: true});
      
    }
  }
  render() {
    if( this.state.loginSuccess || sessionStorage.getItem('userData')){
      return (<Switch>
        <Route path="/home" component={LoadableHomepage} />
        <Redirect to="/home" />
      </Switch>)
    }
    else {
      const responseGoogle = (response) => {
        console.log("google console");
        console.log(response);
        this.signup(response, 'google');
      }
  
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
                <GoogleLogin
                  clientId="103321373237-11s7nk4qqn70odk0lg1olgfn5083t713.apps.googleusercontent.com"
                  buttonText="Login with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}/>
              </Grid>
            </Grid>
          </main>
        </React.Fragment>
      );
    }
  }
}

Loginpage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withStyles(styles)(Loginpage);
