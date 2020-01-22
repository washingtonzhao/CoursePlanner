import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export class Text extends React.Component{
    render(){
        //TODO - css for landingText class
        return (
            <p className = "landingText"> 
                {this.props.value}
            </p>
        )
    }

}

class RouteButton extends React.Component{

}