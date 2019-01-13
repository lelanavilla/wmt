import React, {Component} from "react"
import Link from 'react-router-dom'
import Axios from "axios";

class Form extends Component{
    constructor(props){
        super(props);
        this.state= {
            inputs:{
            year:"",
            make:"",
            model:"",
                checkboxes:{
                    locationFilters:{
                interior: false,
                exterior: false,
                inEngine: false

            }
        }
        
        }}
        this.handleChange = this.handleChange.bind("this")
        this.handleSubmit = this.handleSubmit.bind("this")
        this.handleCheck = this.handleCheck.bind("this")
    }}
    handleChange = (e) =>{
        this.setState(prevState, ()=>{
            this.inputs = e.target.value
        });

        handleSubmit = (e) =>{
            e.preventDefault();
            this.setState(prevState =>{
                this.state = {...state}
            })
        }
    
        componentDidMount(){
            const {make, model, year} = this.props.inputs;
            const _from = "R40";
            const _nkw = `${year}+${make}+${model}`;
            const LH_TitleDesc = "0";
            const _sop = "16";
            const LH_Complete="1";
            const LH_Sold ="1";
            const LH_ItemCondition = "3000";
            const brand = "Brand%2520";
            const type= "Genunine%2520OEM";


            const ebayUrl;"https://www.ebay.com/sch/33694/i.html/?_from=R40&_nkw=`${_nkw}`&LH_TitleDesc=0&_sop=16&LH_Complete=1&LH_Sold=1&LH_ItemCondition=3000&Brand%2520Type=Genunine%2520OEM"
            axios.get(ebayUrl, {headers:{

            }})
        }
    }

