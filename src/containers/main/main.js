import React, { Component } from 'react'
import './main.css'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }

  render(){
    return(
      <div id='main' className='container'>
        <div className='row'>
        {/* MENU - define how the div should behave on several screen sizes*/}
        <Menu className='col-sm-2 col-md-4 col-lg-4' />
        {/* CONTENT - define how the div should behave on several screen sizes*/}
        <Content className='col-sm-10 col-md-8 col-lg-8'/>
        </div>
      </div>
    )
  }
}

export default Main