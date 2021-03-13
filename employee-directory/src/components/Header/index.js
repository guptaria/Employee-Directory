import React from 'react';
import "./style.css";
function Header(props) {
    return(
<div className="page-header">
  <h1>{props.children}</h1>
</div>
    )
};
export default Header;