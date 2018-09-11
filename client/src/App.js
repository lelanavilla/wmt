import React, {Component} from 'react';
import {Switch, Route, withRouter, Redirect}from 'react-router-dom';
import {connect} from 'react-redux';
import {verify} from './redux/usersRedux';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import ProtectedRoute from './ProtectedRoute';
// import Home from './Home'

class App extends Component {
    componentDidMount(){
            this.props.verify();
    }
    render(props){
        const { isAuthenicated, loading} = this.props;
        return(
        <div className="main-wrapper">
        {loading ?
        <div>...Loading ser data</div>
        :
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' render={props => isAuthenicated ?
            <Redirect to="/accountinfo"/> :
        <Login {...props}/>
    }/>
    <Route path='/signup' render={props => isAuthenicated ?
    <Redirect to="/accountinfo" /> :
<Signup {...props} /> 
    }/>
 {/* <ProtectedRoute path='/accountdash' component={AccountDashboard} />  */}
 {/* <ProtectedRoute path='/savedItemslist' component={SavedItemsList}/> */}
 {/* <ProtectedRoute path='accountinfo/:id' component={AccountInfo}/>  */}
 {/* <ProtectedRoute path="/edit-saved-items/:id" component={EditSavedItemsListForm}/>  */}
      </Switch>
      }
        </div>
    )}

    }

export default withRouter(connect(state => state.users, {verify})(App));