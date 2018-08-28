import React, { Component } from 'react';
import CreditCard from './components/CreditCard'
import Form from './components/Form'


class App extends Component {
  constructor(props){
    super(props)
    this.state={
        name:'YOUR NAME',
        number:'•••• •••• •••• ••••',
        validThru:'MM/YY'
    }
}
cardHolder(name){
    
    this.setState({name:name.toUpperCase()})
}

cardNumber(number){
    let maxLength= 16;
    while (number.length < maxLength) {
        number += '•';
    }
    for (let i = 1; i < (maxLength / 4); i++) {
        const space_index = (i * 4) + (i - 1);
        number = `${number.slice(0, space_index)} ${number.slice(space_index)}`;
    }
    this.setState({number:number})
}

cardDate(date){
    this.setState({validThru:date})

}
  render() {
    return (
      <div className="form-container">
        <CreditCard company='CREDIT CARD' name={this.state.name} number={this.state.number} validThru={this.state.validThru} />
        <Form holderName={name =>this.cardHolder(name)} 
                numberCard={number =>this.cardNumber(number)}
                dateCard={date => this.cardDate(date)}/>
        
      </div>
    );
  }
}

export default App;
