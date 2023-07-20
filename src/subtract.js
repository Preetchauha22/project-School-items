import { render } from "@testing-library/react";
import React from "react";
class subtract extends React.Component{
    constructor(){
        super();
        this.state={user:"preet"};
    };
}
render(){
    return(<>  
    <p>hi</p>
    <p>{this.state.user}</p>;)
}