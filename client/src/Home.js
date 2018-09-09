import React from 'react'
import {Link} from 'react-router-dom';
// import QueryInputs from '/QueryInputs.js'

function Home (props){
    return(
<div classNameName="home-page-body">
<div classNameName="home-page-wrapper">
<section id="mobilescreen">
            <div id="speaker"></div>
            <section id="maincontainer">
           
            <section id="mainscreen">
            <header>
            {/* <!-- <i className="fa fa-align-justify" id="menu"></i> --> */}
            <h2>Worth My Time</h2>
           {/* <a href="settings.html"> <i className="fa fa-cog" id="settings"></i></a> */}
            </header>
            <section id="container">
            <p className="intro">A Used Auto Part Profit Margin Analyst Tool</p>
            <ul id="listlink">
            <li><div></div>
            <span className="titles">
            <Link to="/queryinputs" path="./QueryInputs.js"><i className="fa fa-plus-square"></i>Search Sold Parts</Link></span><span className="offdata"></span></li>
            <li><div></div><span className="titles"><i className="fa fa-tag"></i>Check Parts Price List</span><span className="offdata"></span></li>
            {/* <!-- <li><div></div><span className="titles"><i className="fa fa-bar-chart-o"></i>My Account</span><span className="offdata"></span></li> --> */}
            <li><div></div><span className="titles"><i className="fa fa-tags"></i>My Saved Parts List</span><span className="offdata"></span></li>
      {/* <!-- /      <li><div></div><span className="titles"><i className="fa fa-bullhorn"></i>Share</span><span className="offdata"></span></li> --> */}
            <li><div></div><span className="titles"><i className="fa fa-bookmark"></i>Login/Register</span><span className="offdata"></span></li>
            </ul>
            </section>
            <footer>
            <nav><button id="login-button">Login/Signup</button><button id="logout-button">Logout</button></nav>
            </footer>
            </section>
            </section>
            <div id="controlder"></div>
            </section> 
    </div>
    </div>
    )
    
}
export default Home