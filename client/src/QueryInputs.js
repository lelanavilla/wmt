import React, {
    Component
} from 'react'
import PartsResults from "./PartsResults";
import "./query-inputs.css";

export default class QueryInputs extends Component {
    constructor(props) {
        super();
        this.intitialState = {
            query_inputs: {
                year: "",
                make: "",
                model: "",
                submodel: "",
                markings: "",
                partNum: "",
                
            }
        }
        this.state = this.intitialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) =>
        this.setState({
            inputs: {
                [name]: e.target.value,
                ...prevState
            }
        })
        handleSubmit = (e) =>{
            e.preventDefault();
            this.setState({
                ...inputs.name.value,
            
            })
        }
        componentDidMount(props){
             this.state = getInfo();
        }
render(){
   
    
    return(
        <div id="query-body">
        <div id="query-inputs-wrapper">
        <section id="mobilescreen">
        <div id="speaker"></div>
        <section id="maincontainer">
       
        <section id="mainscreen">
        <header>
        {/* <!-- <i class="fa fa-align-justify" id="menu"></i> --> */}
        <h4>Search for Parts</h4>
       {/* <a href="settings.html"> <i class="fa fa-cog" id="settings"></i></a> */}
        </header>
        <section id="payload-container">
        <form id="inputs">
                <label>Year</label>
                <input type="number" name="year"/>
                <br/>
            <label>Make Name:</label>
            <input type="text" name="make" />
            <br/>
            <label>Model Name:</label>
            <input type="text" name="model" />
            <br/>
            <label>Submodel Name:</label>
            <input type="text" name="model" />
            <br/>
            <label id="optional">Optional:</label>
            <br/>
            <label>Part Name:</label>
            <input type="text"name="part-name"id="part-name"/>
            <br/>
            <label>Identifying Markings:</label>
            <input type="text" name="markings" id="markings"/>
<br/>
            <label>Location in Vehicle:</label>
            <input type="text" name="location" id="location"/>
      <br/>
            <button id="start-button" name="start">Go</button>
        </form>
        </section>
        <footer>
   <Link to="/home"path="/Home.js" >
    <nav><button id="back-button">Back</button>
   <button id="logout-button">Logout</button></nav></Link>
        </footer>
        </section>
        </section>
        <div id="controlder"></div>
        </section> 
        </div>
        </div>
    )
}

}

