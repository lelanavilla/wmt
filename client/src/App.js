import React from 'react';
import {Switch, Route}from 'react-router-dom';
// import {connect} from 'react-redux';
// import {verify} from './redux/usersRedux'
// import Login from './Logim';
// import Signup from './Signup';
// import ProtectedRoute from '.ProtectedRoute';


import Home from './Home'

function App (props){
    
    return(
        <div className="main-wrapper">
        
        <Switch>
            <Route exact path='/' component={Home}/>
      </Switch>
        </div>
    )
}

export default App;