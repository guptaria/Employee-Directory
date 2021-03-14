import React from 'react';
import "./style.css";
function Search(props) {


  return (
    <div className="md:flex justify-between my-6">
      <div className="md:mb-0 mb-4">
        <button onClick={props.handleSortByName} id="buttonName" className="bg-white focus:bg-yellow-500 focus:text-white focus:outline-none shadow font-bold text-gray-800 rounded px-8 py-1 mr-4 hover:bg-yellow-500 hover:text-blue">Sort By Name</button>
        <button onClick={props.handleSortByAge} id="buttonAge" className="bg-white focus:bg-yellow-500 focus:text-white focus:outline-none shadow font-bold text-gray-800 rounded px-8 py-1 hover:bg-yellow-500 hover:text-blue">Sort By Age</button>
      </div>
      <form>
        <input
          className="shadow pl-5 rounded w-full py-1"
          type="text"
          placeholder="search employee"
          onChange={props.handleInputPlaceHolder} />
      </form>
    </div>


  )
};
export default Search;







