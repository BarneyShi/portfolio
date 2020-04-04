import React, {Component} from 'react'
import './App.css'


class App extends Component {
  render() {
    return(
      <div>
          <nav className='navbar bg-light'> 
              <h2>
                BARNEY SHI
              </h2>
          </nav>
          <div className='jumbotron'>
              <img className='rounded-circle' id='avator-picture' alt='avator' src='brian.jpg' />
              <h2>Barney Shi</h2>
          </div>
          <div className='container'>
              <div className='row'>
                  <div className='col-4  text-left' id='introduction'>
                      <p>About me</p>
                      <p>I'm a second-degree compute science student at University of British Columbia. I graduated with a Bachelor degree of Economics in 2018.
                         I'm interested in web development.  
                      </p>
                  </div>
                  <div className='col-4 offset-4'>
                  <p>Project</p>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default App;