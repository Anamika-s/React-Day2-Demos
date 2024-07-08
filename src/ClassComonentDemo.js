import { Component } from "react";

export default class FirstCC extends Component
{
    render(){
        return(
            <h1> I am a class component </h1>
        )
    }
}

export class SecondCC extends Component
{
    render(){
        return(
            <h1> I am a class component 
                <h2> Name is {this.props.name} </h2>
            </h1>
        )
    }
}

export class ThirdCC extends Component
{
    state ={
        name:"karan"
    };
    hello =() =>
        {
            alert("Hello");
        }
       ChangeText = ()=>
       {
        this.setState({name:"new name"})
       }
    render(){
        return(
            <>
             Hello {this.state.name}
            <button onClick={this.hello}> Click </button>
    <button onClick={this.ChangeText}> Change Text </button>
              </>
        );
     
        
    }
}

{/* <button onClick=Hello()> CLick </button> */}