import { Component } from "react";
 
export class App5 extends Component
{
    state =
    {
        isLoggedIn:true
    }
    render()
    {
        let {isLoggedIn} = this.state;
        let AuthButton;
        if(isLoggedIn)
        {
            AuthButton = <button> Logout </button>
        }
        else{
            AuthButton=<button> Login </button>
        }
        return(
        <div>
        <h1> This is a demo showing several ways to use implment
            conditional rendering of elements, 
        </h1>
        {AuthButton}
        </div>
);
    }
}