import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

const styles = theme => ({
	root: {
    flexGrow: 1,
    margin: '10px',
  },
});

class Footer extends React.Component {
	render(){
		const {classes} = this.props;
		return(
			<div className={classes.root}>
				<Grid container spacing={24}>
		      		<Grid item xs={6} sm={3}>
			          kuch kuch
			        </Grid>
			        <Grid item xs={6} sm={3}>
			         Bahut kuch
			        </Grid>
			        <Grid item xs={6} sm={3}>
			          Social wala
			        </Grid>
			        <Grid item xs={6} sm={3}>
			          promotion wala
			        </Grid>
		      	</Grid>
				
			</div>
		);
	}
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);

