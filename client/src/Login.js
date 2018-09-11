import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import './views/login.css';
import {login} from './redux/usersRedux.js';

class Login extends Component {
    constructor(props){
        super(props);
        this.state ={
            inputs:{
                username:"",
                password:""
            }
        }//no binding?
    }
    handleChange = (e) =>{
        const {name, value} = e.target;
        this.setState((prevState) =>{
            return{
                inputs:{
                    ...prevState.inputs,
                    [name]: value
                }
            }
    })
    console.log(this.state.inputs);
}
clearInputs = () =>{
    this.setState({
        inputs:{
            username: "",
            password: ""
        }
    })
}
handleSubmit = (e) =>{
    e.preventDefault();
    this.props.login(this.state.inputs);
    this.clearInputs();
}
render(){
    const authErrorCode = this.props.authErrCode.login;
    let errMsg = "";
    if(authErrorCode < 500 && authErrorCode > 399) {
        errMsg ="Invalid username or password"
    }else if (authErrorCode > 499){
        errMsg = "Server error"
    }
    return(
        <div classNameName="login-page-body">
<div classNameName="login-page-wrapper">
<section id="login-mobilescreen">
            <div id="login-speaker"></div>
            <section id="login-maincontainer">
           
            <section id="login-screen">
            <header>
            {/* <!-- <i className="fa fa-align-justify" id="menu"></i> --> */}
            <h2>Worth My Time</h2>
           {/* <a href="settings.html"> <i className="fa fa-cog" id="settings"></i></a> */}
            </header>
            <section id="login-container">
            {/* <p className="intro">A Used Auto Part Profit Margin Analyst Tool</p> */}
        
                    <div>
                            <form onSubmit={this.handleSubmit} id="log-in-form">
                                <div id="login-header">
                                    <h1>Welcome back!</h1>
                                </div>
                                <input onChange={this.handleChange} className="user-name" type="text" name="username" placeholder="User Name*" required />
                                <input onChange={this.handleChange} clasName="password-input" type="text" name="password" placeholder="Your password*" required />
                                <button type="submit" id="login-form-button">Log in</button>
                                <br />
                            </form>
                            </div>
                            </section>
                            <footer>
                            <nav>
                <Link to="/signup"><button id="login-signup">Signup</button></Link>
                <button id="login-logout">Logout</button></nav>
                </footer>
                            </section>
                            </section>
                            </section>
                        
                    </div>
                </div>
           
        )
}
}
 
export default connect(state => state.users, {login})(Login);