import React, {Component} from 'react';
import LazyHero from 'react-lazy-hero';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
    heroBanner: {
        zIndex:-1
    },
    headline: {
        color: '#000000'
    }
};

class HeroBanner extends Component {
    render() {
        const {imageSrc, headline, children, classes} = this.props;
        const headlineComponent = headline ? <h1 className={classes.headline}>{headline}</h1> : '';
    
        return (
            <LazyHero imageSrc={imageSrc} opacity={0.3} parallaxOffset={40} className={classes.heroBanner}>
                {headlineComponent}
                {children}
            </LazyHero>
        );
    }
}

HeroBanner.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    headline: PropTypes.string,
    children: PropTypes.object,
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(HeroBanner);