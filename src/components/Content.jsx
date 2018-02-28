import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
	root: {
    flexGrow: 1,
    margin: '10px',
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});


function Cards(props) {

  return (
    <div>
      <Card className={props.card}>
        <CardContent>
          <Typography className={props.title}>Word of the Day</Typography>
          <Typography variant="headline" component="h2">
            benevolent
          </Typography>
          <Typography className={props.pos}>adjective</Typography>
          <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

class Content extends React.Component {
    
  render(){
  	const { classes } = this.props;
    return(
      <div className={classes.root}>
      	<div className={classes.root}>
      	<Typography variant="headline" gutterBottom>
		       Headline
		    </Typography>
      	<Grid container spacing={24}>
      		
      		<Grid item xs={6} sm={3}>
	          <Cards props={classes}/>
	        </Grid>
	        <Grid item xs={6} sm={3}>
	         <Cards props={classes}/>
	        </Grid>
	        <Grid item xs={6} sm={3}>
	          <Cards props={classes}/>
	        </Grid>
	        <Grid item xs={6} sm={3}>
	          <Cards props={classes}/>
	        </Grid>
      	</Grid>
      	</div>
      	<div className={classes.root}>
      	<Typography variant="headline" gutterBottom>
		       Headline
		    </Typography>
      	<Grid container spacing={24}>
      		<Grid item xs={6} sm={4}>
	          <Cards props={classes}/>
	        </Grid>
	        <Grid item xs={6} sm={4}>
	         <Cards props={classes}/>
	        </Grid>
	        <Grid item xs={12} sm={4}>
	          <Cards props={classes}/>
	        </Grid>
      	</Grid>
      	</div>
        
      </div>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
