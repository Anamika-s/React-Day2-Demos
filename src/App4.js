import { Component } from "react";
import AuthButton from "./AuthButton";
import AuthButton1 from "./AuthButton1";

export class App4 extends Component
{
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
        {/* <AuthButton isLoggedIn={this.state.isLoggedIn}/> */}
        <AuthButton1 isLoggedIn={this.state.isLoggedIn}/>
        
        </div>
);
    }
}