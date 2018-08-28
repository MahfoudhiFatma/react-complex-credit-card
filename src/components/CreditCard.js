import React, { Component } from 'react';
import '../index.css'
import chip from '../image/sim-card-chip.png'
import visa from '../image/visaLogo.jpg'


class CreditCard extends Component{
    
       constructor(props){
           super(props)
       }
    
    render(){
        return(
            <div className="credit-card-container">
                <h1>{this.props.company}</h1>
                <img src={chip} className="chip-img"/>
                <div className="credit-card_content">
                    <div className="credit-card-numbers">
                    <h2 className="credit-card-rip">{this.props.number}</h2>
                    <div className="credit-card-code">
                        <h2>5422</h2>
                        <h2>{this.props.validThru}</h2>
                    </div>
                    <h2 className="holder-name">{this.props.name}</h2>
                    </div>
                    <div className="visa-logo">
                    <img src={visa}/>
                    </div>
                </div>
    
                
            </div>
            );

    }
}

  export default CreditCard