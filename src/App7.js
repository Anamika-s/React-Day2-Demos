import { Component } from "react";
 
export class App7 extends Component
{
    // expression?true:false
    state =
    {
        isLoggedIn:true
    }
    render()
    {
        let {isLoggedIn} = this.state;
         
        return(
        <div>
        <h1> This is a demo showing several ways to use implment
            conditional rendering of elements, 
        </h1>
           {isLoggedIn && <button> Logout </button>}
           {!isLoggedIn && <button> Login </button>}
           </div>
    );
    }
}