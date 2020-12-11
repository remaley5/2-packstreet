import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/reducers/authentication';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'password',
      email: 'demo@example.com'
    };
    this.handleDemo = this.handleDemo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateEmail = this.updateValue("email");
    this.updatePassword = this.updateValue("password");
  }

  handleDemo = async(e) => {
    console.log('in handle demo')
    this.setState({'email': 'demo@example.com', 'password': 'password'})
    console.log('demo', this.state.email, this.state.password)
    this.handleSubmit(e);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('login', this.state.email, this.state.password)
    this.props.login(this.state.email, this.state.password);
  }

  updateValue = (name) => (e) => {
    this.setState({ [name]: e.target.value });
  };

  render() {
    if (this.props.currentUserId) {
      return <Redirect to="/" />
    }

    return (
      <main className="login-form">
        <form className='landing-page__form' onSubmit={this.handleSubmit}>
          <input className='form-input'
            type="text"
            placeholder="enter your email"
            value={this.state.email}
            onChange={this.updateEmail}
          />
          <input className='form-input'
            type="password"
            placeholder="enter your password"
            value={this.state.password}
            onChange={this.updatePassword}
          />
          <div className='form-buttons'>
            <button className='form-button' type="submit">Login</button>
            <button className='form-button' onClick={this.handleDemo}>demo</button>
          </div>
        </form>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUserId: state.auth.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
