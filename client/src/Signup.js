import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./views/signup.css";
import {signup} from "./redux/usersRedux.js";
import {connect} from "react-redux";

class Signup extends Component{
    constructor(){
        super();
        this.state = {
            inputs:{
                name: "",
                email: "",
                username:"",
                password:""           
             }
        }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange = (e) => {
    e.persist();
    this.setState(prevState =>{
        return{
            inputs:{
                ...prevState.inputs,
                [e.target.name]: e.target.value
            }
        }
    })
    console.log(this.state.inputs);

}

clearInputs = () => {
    this.setState({
        inputs:{
            name:"",
            email:"",
            username:"",
            password:""
        }
    })
}
handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state.inputs);
    this.clearInputs();
}

render(props){
    const authErrorCode = this.props.authErrCode.signup;
    const{name, username, password, email} = this.state.inputs;
    let errMsg = "";
    if(authErrorCode < 500 && authErrorCode > 399) {
        errMsg = "Invalid username or password"
    }else if(authErrorCode > 499) {
        errMsg = "Server Error"
    }
    return(
        <div>
            <div classNameName="signup-page-body">
<div classNameName="signup-page-wrapper">
<section id="signup-mobilescreen">
            <div id="signup-speaker"></div>
            <section id="signup-maincontainer">
           
            <section id="signup-mainscreen">
            <header>
            {/* <!-- <i className="fa fa-align-justify" id="menu"></i> --> */}
            <h2>Worth My Time</h2>
           {/* <a href="settings.html"> <i className="fa fa-cog" id="settings"></i></a> */}
            </header>
            <section id="signup-container">
            {/* <p className="intro">A Used Auto Part Profit Margin Analyst Tool</p> */}
        
             <div>
                        <form id="sign-up-form">
                            <div className="signup-header">
                            <h2 id="register">Register for an Account</h2>
                            </div>
                            <input onChange={this.handleChange} className="user-name" type="text" name="name" value={name} placeholder="Name*" required="" />
                            <input onChange={this.handleChange} className="username-selection-input" name="username" value={username} type="text" placeholder="User Name*" required="" />
                            <input onChange={this.handleChange} type="text" name="email" value={email} placeholder="Email Address*" required="" />
                            <input onChange={this.handleChange} type="text" name="password" value={password} placeholder="Set a password*" required="" />
                          <button type="submit" onClick={this.handleSubmit} id="signup-form-button">Login</button>
                        </form>
                    </div>
                </section>
                <footer>
                <nav>
                <Link to="/login"><button id="signup-login">Login</button></Link>
               <Link to="/"><button id="signup-logout">Logout</button></Link> 
               </nav>
                </footer>
                </section>
                </section>
                </section>

            </div>
            </div>
            </div>
    )
}
}
export default connect(state => state.users, {signup})(Signup)