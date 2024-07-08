import { Component } from "react";
 
export class App6 extends Component
{
    // expression?true:false
    state =
    {
        isLoggedIn:false
    }
    render()
    {
        let {isLoggedIn} = this.state;
         
        return(
        <div>
        <h1> This is a demo showing several ways to use implment
            conditional rendering of elements, 
        </h1>
           {isLoggedIn ? <button> Logout </button>: <button> Login </button>}   </div>
);
    }
}