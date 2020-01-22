// import React from 'react'
// import {CourseBubble} from './components/landingPage';

// //input button is a stateless component, jsut a button with click handler and label passing course name, requirement, and # of units

// // export const InputButton = (props) => {
// //     return(
// //         <button className = "courseInput" onClick={props.onClick}>
// //             Enter class!
// //         </button>
// //     )
// // }

//         //initialize component state
//         this.state = {
//             courseTitle: null,
//             units: null,
//             requirement: null,
//             color: null
//         };

// class InputButton extends React.Component{
    
//     constructor(props){
//         super(props);
//         this.state = {
//             courseTitle: null,
//             units: 0,
//             req: null,
//             colors: {}
//         };
//     }
//     makeBubble(){
//         let title = this.state.courseTitle;
//         let units = this.state.units;
//         let requirement = this.state.req;
//         let color = this.state.colors.get(requirement);

        
//         this.render(){
//             return (
//                 <CourseBubble courseTitle = {title} units = {units} requirement = {requirement} color = {color}/>
//             )
//         }
//     }

//     render(){
//         return (
//             <button className = "courseInput" onClick= {makeBubble()}>
//              Enter class!
//             </button>
//         );
//     }
// }