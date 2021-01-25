import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://cdni.iconscout.com/illustration/free/thumb/mountain-biking-2080785-1763858.png' />
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
          </div>
        <div>
          <a>Messagies</a>
          </div>
          <div>
            <a>News</a>
          </div>
          <div>
            <a>Music</a>
          </div>
          <div>
            <a>Settings</a>
          </div>
      </nav>
      <div className='content'>
        <div>
        <img src='https://pixnio.com/free-images/2018/12/08/2018-12-08-16-25-38.jpg' />
        </div>
        <div>
          Ava + descripsion
        </div>
        <div>My posts
          <div>
            New post
          </div>
          <div>
            Post 1
          </div>
          <div>
            Post 2
          </div>
        </div>
    </div>
    </div>);
}

export default App;