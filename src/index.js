import React from 'react';
import ReactDOM from 'react-dom'
import Home from './Components/Home';
import Header from './Components/Header';

const Tesla = () =>{
  return(
      <div>
        <Header />
        <Home />
      </div>
      
  )
}



ReactDOM.render(<Tesla />, document.getElementById('root'));