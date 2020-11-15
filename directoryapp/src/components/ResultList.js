import React from "react";

function ResultList(props){
    return(
    <tr>
        <td><img src={props.image} alt="employee"></img></td>
        <td>{props.first} {props.last}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.dob}</td>
    </tr>
    )
}

export default ResultList;