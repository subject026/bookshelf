import React from 'react'
import ReactDOM from 'react-dom'

import {Logo} from './components/logo'

const App = () => {
  return (
    <div>
      <Logo />
      <h1>Bookshelf</h1>
      <button onClick={() => console.log('register clicked')}>Register</button>
      <button onClick={() => console.log('login clicked')}>Login</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
