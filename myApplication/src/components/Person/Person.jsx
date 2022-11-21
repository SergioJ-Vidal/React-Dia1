import React from "react";

// class Person extends React.Component {

//     render() {

//         <div><span>Hello I'm {this.props.name} {this.props.surname} </span> 
//            <span>and I'm {this.props.age}</span>;</div>
//     }

// }

const Person = (props) => {

    return <div><span>Hello I'm {props.name} {props.surname} </span>
            <span>and I'm {props.age}</span>;</div>

};

export default Person;