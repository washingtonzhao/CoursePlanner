///
// src/components/course-bubble.js
///
import React from 'react'
import { Link } from 'react-router-dom'
//import input button component
import { InputButton } from './inputButton'
// //Create bubble component
// function CourseBubble(props){
//     return(
//         <div class="bubbleContainer">
//             <img src="" alt = {props.courseTitle}></img>
//             <div class= "bubbleText"><h1>{props.courseTitle}</h1></div>
//         </div>

//         /* css to center:

//         .container {
//             position: relative;
//             text-align: center;
//             color: white;
//         }
        
//         .centered {
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//         }*/
//     )
// }

// export const CourseBubble = (props) => {
//     return(
//         <button>
//             <div class="bubbleContainer">
//                 <img src="" alt = {props.courseTitle}></img>
//                 <div class= "bubbleText"><h1>{props.courseTitle}</h1></div>
//             </div>\
//         </button>
//     )
//}

class CourseBubble extends React.Component{
    constructor(props){
        super(props);

        //initialize component state
        this.state = {
            courseTitle: null,
            units: null,
            requirement: null,
            color: null
        };

    }

    //should assign a color based on its requirement
    createTypes(){
    }

    handleCreation(title, numUnits, req){   
        this.setState({
            courseTitle: title,
            units: numUnits,
            requirement: req
        });
    }

    render(){
        return(
            <div class="bubbleContainer">
                <img src="" alt = {this.props.courseTitle} color = {this.props.color}></img>
                <div class= "titleText"><h1>{this.props.courseTitle}</h1></div>
                <div class= "unitsText"><h2>{this.props.units}</h2></div> 
            </div>
        );
    }


}