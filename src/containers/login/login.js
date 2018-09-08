import React, { Component } from 'react'
import Octicon, {Jersey} from '@githubprimer/octicons-react'
import './login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }
  render() {
    return (
      <div id='login-container' className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-6' id='login-icon-container'>
            <Octicon icon={Jersey} size='mega'/>
          </div>
          <div id='login-form-container' className='col-sm-12 col-md-6 col-lg-6'>
            <form>
              <div className='form-group'>
                {/* <label htmlFor=''>Username</label> */}
                <input type='text' className='form-control' id='login-username' placeholder='Username' />
              </div>
              <div className='form-group'>
                {/* <label htmlFor=''>Password</label> */}
                <input type='text' className='form-control' id='login-password' placeholder='Password' />
              </div>
              <div className='btn btn-primary'>Submit</div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login