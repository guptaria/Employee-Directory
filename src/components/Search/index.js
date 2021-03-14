import React from 'react';
import "./style.css";
function Search(props) {
 

    return (
      // <form onSubmit={props.handleSubmitPlaceHolder}>
      <form>
        <div className="input-group">
  <div className="form-outline">
  <label className="form-label" for="form1">Search</label>
    <input type="search" id="form1" className="form-control" onChange={props.handleInputPlaceHolder}/>
    
  </div>
  {/* <button type="button" className="btn btn-primary">
    <i className="fas fa-search"></i>search
  </button> */}
</div>
</form>
    )
};
export default Search;


      //   <input
      //     value={props.search}
      //     onChange={props.handleInputChange}
      //     name="term"
      //     list="term"
      //     type="text"
      //     className="form-control"
      //     placeholder="Type in a search term to begin"
      //     id="term"
      //   />
      // </div>