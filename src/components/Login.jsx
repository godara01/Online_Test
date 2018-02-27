import React from 'react';
import PropTypes from 'prop-types';

import { gql, graphql } from 'react-apollo'

const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};


class LoginDialog extends React.Component{

  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
        <div>
          <List>
            {emails.map(email => (
              <ListItem button onClick={() => this.handleListItemClick(email)} key={email}>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItem>
            ))}
            <ListItem button onClick={() => this.handleListItemClick('addAccount')}>
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="add account" />
            </ListItem>
          </List>
        </div>
      </Dialog>
    );
  }
}

LoginDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

// const LoginDialogWrapped = withStyles(styles)(LoginDialog);

// class Login extends React.Component {
//   state = {
//     open: true,
//     selectedValue: emails[1],
//   };

//   handleClickOpen = () => {
//     this.setState({
//       open: true,
//     });
//   };


//   render() {
//     return (
//       <div>
//         <LoginDialogWrapped
//           selectedValue={this.state.selectedValue}
//           open={this.state.open}
//           onClose={this.handleClose}
//         />
//       </div>
//     );
//   }
// }

export default withStyles(styles)(LoginDialog);