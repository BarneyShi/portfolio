import React, { Component } from 'react'
import './App.css'


class App extends Component {
  render() {
    return (
      <div>
        <nav className='navbar bg-light'>
          <h2>
            BARNEY SHI
          </h2>
        </nav>
        <div className='jumbotron text-center'>
          <img className='rounded-circle' id='avator-picture' alt='avator' src='brian.jpg' />
          <h2>Barney Shi</h2>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-4 offset-1  text-left' id='introduction'>
              <p style={{fontWeight:'bolder'}}>About me</p>
              <p>I'm a second-degree compute science student at University of British Columbia. I graduated with a Bachelor degree of Economics in 2018.
              I'm interested in web development.
              </p>
            </div>
            
            <div className='col-1 vl'>

            </div>

            <div className='col-4 offset-1' id='project'>
              <p style={{fontWeight:'bolder'}}>Project</p>
              <ul>
                <li>
                  <a href='https://autoturnonline.com/'target='_blank' rel="noopener noreferrer">AutoTURN Online</a>
                </li>
                <p>Co-op work project. Responsive, user-friendly landing page featuring AutoTURN Online on WordPress</p>
                <li>
                  <a href='https://yelplakes.herokuapp.com/' target='_blank' rel="noopener noreferrer">YelpLakes</a>
                </li>
                <li>
                  <a href='http://bit.ly/2HgCQST' target='_blank' rel="noopener noreferrer">JQuery Todo List</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;