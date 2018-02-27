import React from 'react';

class PaperForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '123',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.username});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(){

  return (
      <form onSubmit={this.handleSubmit}>
      Online form<br />
        <label>
          Exam:
          <input type="text" value={this.state.username} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Year:
          <input type="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Subject:
          <input type="text"  onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
  );
}
}

export default PaperForm;