import React from 'react';
import "./style.css";
function EmployeeCard(props){
    return(
<div className="card">
    <div  className="img-container">
        <img src= {props.image} />
    
        
    </div>
    <div className="body">
        <ul> 
            <li> 
                <strong>Name: </strong>{props.Name}
            </li>
            <li> 
                <strong>Age: </strong>{props.Age}
            </li>
            {/* <li> 
                <strong>Country: </strong>{props.Country}
            </li> */}
            <li> 
                <strong>Email: </strong>{props.Email}
            </li>

            <li> 
                <strong>Contact Number: </strong>{props.Contact}
            </li>
        </ul>
    </div>
</div>

    );
}
export default EmployeeCard;