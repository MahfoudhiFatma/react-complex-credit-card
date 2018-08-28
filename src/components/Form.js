import React,{Component} from 'react'



class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            number:'',
            date:'',
            isValidCardHolder: true,
            isValidCardNumber:true,
            isValidCardDate:true
        }
    }
    nameChange=(event)=>{  
        let name=event.target.value
        name = name.replace(/[^a-zA-Z ]/g, "").toUpperCase();
        this.props.holderName(name)

        this.setState({name:name,
            isValidCardHolder: RegExp("[A-Z ]{1,20}").test(this.state.name)})
        }
    numberChange=(event)=>{
        this.setState({number:event.target.value,
            isValidCardNumber: RegExp("[0-9 ]{15}").test(this.state.number)},
            ()=>{
                this.state.number = this.state.number.replace(/[^0-9]/g, "");
                this.props.numberCard(this.state.number)})
    }

    dateChange=(event)=>{
       let cardDate=event.target.value
        let testMonth = cardDate.substr(0, 2)>=1 && cardDate.substr(0, 2)<=12
        cardDate = cardDate.replace(/[^0-9]/g, "");
        if (cardDate.length >=3) {
            //this.state.date = this.state.date.substr(0, 2) + "/" +this.state.date.substr(2);
            cardDate=cardDate.substr(0, 2) + "/" +cardDate.substr(2)
        }

        this.props.dateCard(cardDate)
        this.setState({date:cardDate,
            isValidCardDate:testMonth})
        
       
        
       

    }
    render(){
        return(
            <div className="form-inputs">
                <input type="text" size="30" placeholder="Card Number" onChange={this.numberChange} value={this.state.number} maxLength='16'/>
                <p>{this.state.isValidCardNumber ? "": "please enter a valid number card"}</p>
                <input type="text" size="30" placeholder="Your Name" onChange={this.nameChange} value={this.state.name} maxLength='20'/>
                <p>{this.state.isValidCardHolder? "": "please enter a valid name"}</p>
                <input type="text" size="30" placeholder="MM/YY" onChange={this.dateChange} value={this.state.date} maxLength='5'/>
                <p>{this.state.isValidCardDate? "": "please enter a valid date"}</p>
            </div>
        )

    }
}
export default Form