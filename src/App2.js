import { Component } from "react";
import AuthButton from "./AuthButton";
export default class App3 extends Component
{
    state={
        isLoggedIn:false
    }
    render()
    {
        //destructuring
        let {isLoggedIn} = this.state;
        // alert(isLoggedIn)
        const renderButton = ()=>
        {
            if(!isLoggedIn){
                return <button> Login </button>
            }
            else{
            return <button> Logout </button> 
        }
    }
        return(
            <div>
                <h1> This is a demo showing several ways to use implment
                    conditional rendering of elements, 
                </h1>
                {/* <button> Login </button>
                <button> Logout </button> */}
                {renderButton()}
            </div>

        );
    }
}