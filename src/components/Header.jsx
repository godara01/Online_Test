import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class Header extends React.Component {
	
	
	render(){
		const { classes } = this.props;
		return(
			 <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Herosan
          </Typography>
          <Link to='/login'><Button color="contrast">Login</Button></Link>
          <Link to='home'><Button color="contrast">Home</Button></Link>
          <Link to='pageform' ><Button color="contrast">Page Form</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
		);
	}
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Header;
