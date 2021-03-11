import React from 'react';
function EmployeeCard(props){
    return(
<div className="card">
    <div className="img-container">
        {props.image}
    </div>
    <div className="body">
        <ul> 
            <li> 
                <strong>Name</strong>{props.name}
            </li>
            <li> 
                <strong>Email</strong>{props.email}
            </li>
            <li> 
                <strong>Contact Number</strong>{props.contact}
            </li>
        </ul>
    </div>
</div>

    );
}
export default EmployeeCard;