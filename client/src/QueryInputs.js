// `import React, {
//     Component
// } from 'react'
// import PartsResults from "./PartsResults";
// import "./query-inputs.css";
//import '../../assets/priceList.json';

// export default class QueryInputs extends Component {
//     constructor(props) {
//         super();
//         this.intitialState = {
//             query_inputs: {
//                 year: "",
//                 make: "",
//                 model: "",
//                 submodel: "",
//                 markings: "",
//                 partNum: "",
                
//             }, 
//              outputs:{
    //              title:"",
    //              img:"",
    //              description:""
            //      max_price:"",
            //      profit_margin_calc:""
//}
//         }
//         this.state = this.intitialState;
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange = (e) =>
//     e.persist();
//         this.setState(prevState =>{
//             return{
//             inputs: {
//                 ...prevState.inputs,
//                 [e.target.name]: e.target.value
//             }
//         }})
//         console.log(this.state.inputs);


//         handleSubmit = (e) =>{
//             console.log("you made it to handle submit in query inputs");
//             e.preventDefault();
//             this.props.inputs.value
//             }

//CHECK IF YEAR MAKE MODEL ARE IN RESPONSE
//CHECK THAT EACH PAYLOAD HAS AN IMG FILE
       //function isValidItem(part){
    //const{ year, make, model, partNum, submodel} = this.props.query_inputs;
    // const{title, description} = this.props,outputs;
       // const part = this.part;
 //       let isValid = false;
 //       if({year}in part || {make}in part && {model}in part){
//      isValid= true;
    //    }
 //   if({img} !== null){
   //     isValid=true;
   // checkPriceList();

//};
//CHECK MAX SOLD PRICE AGAINST LOCAL.JSON PRICELIST PART COST TO CALC PROFITMARGIN VALUE



    

            
//         componentDidMount(){
//             this.props.getParts(this.props.partsData._id)
//          {...this.props.outputs}             
//         }
// render(props){
     // const { year, make, model,submodel,markings,partNum} = this.props.queryInputs;
//     //const{ title, img, description, max_price, profit_margin_calc} = this.props.outputs;
//const partsData = this.props.partsData.parts;
//    const partsList = parts.map(part => <OnePart key={part}{...part}/>)
  
  <div className="onePartDetailsWrapper">
  <h2>Search Results</h2>
  <button value="New Search"></button>
  <img className="partInfo" style="width:150px">{this.props.img}></img>
  <h4 className="part_title">{this.props.title}</h4>
  <p className="description">{this.props.description}</p>
  <h3 className="pm_calc">{this.props.profit_margin_calc}</h3>
  <input type="checkbox" value="save to hotlist?"></input>

  {/* <div className="auto">
  <h5 className="year_info">{this.props.inputs.year}</h5>
  <h5  className="make_info">{this.props.inputs.make}</h5>
  <h5 className="model_info">{this.props.inputs.model}</h5>
  </div> */}
  </div>
// return(
//         <div id="query-body">
//         <div id="query-inputs-wrapper">
//         <section id="mobilescreen">
//         <div id="speaker"></div>
//         <section id="maincontainer">
       
//         <section id="mainscreen">
//         <header>
//         {/* <!-- <i class="fa fa-align-justify" id="menu"></i> --> */}
//         <h4>Search for Parts</h4>
//        {/* <a href="settings.html"> <i class="fa fa-cog" id="settings"></i></a> */}
//         </header>
//         <section id="payload-container">
//         <form id="inputs">
//                 <label>Year</label>
//                 <input type="number" name="year"/>
//                 <br/>
//             <label>Make Name:</label>
//             <input type="text" name="make" />
//             <br/>
//             <label>Model Name:</label>
//             <input type="text" name="model" />
//             <br/>
//             <label>Submodel Name:</label>
//             <input type="text" name="model" />
//             <br/>
//             <label id="optional">Optional:</label>
//             <br/>
//             <label>Part Name:</label>
//             <input type="text"name="part-name"id="part-name"/>
//             <br/>
//             <label>Identifying Markings:</label>
//             <input type="text" name="markings" id="markings"/>
// <br/>
//             <label>Location in Vehicle:</label>
//             <input type="text" name="location" id="location"/>
//       <br/>
//             <button id="start-button" name="start">Go</button>
//         </form>
//         </section>
//         <footer>
//    <Link to="/home"path="/Home.js" >
//     <nav><button id="back-button">Back</button>
//    <button id="logout-button">Logout</button></nav></Link>
//         </footer>
//         </section>
//         </section>
//         <div id="controlder"></div>
//         </section> 
//         </div>
//         </div>
//     )
// }

// }

