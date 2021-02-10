import React, { Component } from 'react';

class FormDemo1 extends Component {

    state = {userName: '', city:''};

    onChangeHandler = (event)=>{
    //  this.setState({userName: event.target.value})
    let name = event.target.name;
    let value = event.target.value;

    this.setState({[name] : value});
    }

    onSubmitHandler = (event) =>{

       event.preventDefault();// Sayfayi refresh etmez
       alert(this.state.userName);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h3>User Name:</h3>
                    <input name="userName" type="text" onChange={this.onChangeHandler}></input>
                    <br></br>
                    <h3>Your Name is :  {this.state.userName}</h3>
                    <hr></hr>
                    <h3>City:</h3>
                    <input name="city" type="text" onChange={this.onChangeHandler}></input>
                    <br></br>
                    <h3>Your City is :  {this.state.city}</h3>
                    
                    <input type="submit" value="Save"></input>
                </form>

            </div>
        );
    }
}
 
export default FormDemo1;