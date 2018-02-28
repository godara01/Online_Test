import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
// import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
// import withWidth from 'material-ui/utils/withWidth';

import Content from './Content.jsx';
import Footer from './Footer.jsx';

const styles = theme =>( {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    margin: theme.spacing.unit,
  },
  container: {
  	display: 'flex',
  	width: '100%',
  	justifyContent: 'space-between',
  },
});

class Landing extends React.Component {
	state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenu1 = event => {
    this.setState({ anchorEl1: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClose1 = () => {
    this.setState({ anchorEl1: null });
  };

	render(){
		const { classes } = this.props;
    	const { auth, anchorEl, anchorEl1 } = this.state;
    	const open = Boolean(anchorEl);
    	const openmenu = Boolean(anchorEl1);

		return(
			<div className={classes.root}>
				<FormGroup>
          			<FormControlLabel
		            control={
		              <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
		            }
		            label={auth ? 'Logout' : 'Login'}
		          />
		        </FormGroup>
		        <AppBar position="static">
		          <Toolbar>
		          	<div className={classes.container}>
		          		<div>
				        <Hidden mdUp>
				        	<IconButton className={classes.menuButton} color="inherit" aria-label="Menu12" aria-owns={openmenu ? 'menu-appbar' : null} aria-haspopup="true"
				                  onClick={this.handleMenu1} >
			            	<MenuIcon />
				            </IconButton>
				            <Menu
				              id="menu-appbar1"
				              anchorEl={anchorEl1}
				              anchorOrigin={{
				                vertical: 'top',
				                horizontal: 'right',
				              }}
				              transformOrigin={{
				                vertical: 'top',
				                horizontal: 'right',
				              }}
				              open={openmenu}
				              onClose={this.handleClose1} >
				              <MenuItem onClick={this.handleClose1}>Home</MenuItem>
				              <MenuItem onClick={this.handleClose1}>Choose Plan</MenuItem>
				              <MenuItem onClick={this.handleClose1}>Exams</MenuItem>
				              <MenuItem onClick={this.handleClose1}>Status</MenuItem>
				            </Menu>
			            </Hidden>
			            <Hidden smDown>
					          	<Button color="inherit" className={classes.button} fullWidth={false}>
								    Home
								 </Button>
								 <Button color="inherit" className={classes.button} fullWidth={false}>
								    Choose Plan
								 </Button>
								 <Button color="inherit" className={classes.button} fullWidth={false}>
								    Exams
								 </Button>
								 <Button color="inherit" className={classes.button} fullWidth={false}>
								    Primary
								 </Button>
						</Hidden>
						</div>
				            {auth ? (
				              <div >
				                <IconButton
				                  aria-owns={open ? 'menu-appbar' : null}
				                  aria-haspopup="true"
				                  onClick={this.handleMenu}
				                  color="inherit"
				                >
				                  <AccountCircle />
				                </IconButton>
				                <Menu
				                  id="menu-appbar"
				                  anchorEl={anchorEl}
				                  anchorOrigin={{
				                    vertical: 'top',
				                    horizontal: 'right',
				                  }}
				                  transformOrigin={{
				                    vertical: 'top',
				                    horizontal: 'right',
				                  }}
				                  open={open}
				                  onClose={this.handleClose}
				                >
				                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
				                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
				                </Menu>
				              </div>
				            ) : <Button color="inherit" className={classes.button} fullWidth={false}>
								    Login/Signup
								 </Button>}

		            </div>
		          </Toolbar>
		        </AppBar>
		        <Content />
		        <Footer />
			</div>
		);
	}
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
