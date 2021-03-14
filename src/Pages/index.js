import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header/index';
import Search from '../components/Search/index';
import Wrapper from '../components/Wrapper/index';
import EmployeeCard from "../components/EmployeeCard/index";
// import Employee from "../utils/Employee.json";
import API from "../utils/API";
// let results = [];

function Pages() {
  const [employeeState, setEmployeeState] = useState([]);
  const [tempSearch, setTempSearch] = useState();
  const [manipulateState, setManipulateState] = useState([]);

  useEffect(() => {
    // if (employeeState.results.length === 0) {
    API.search()
      .then(res => {
        // if (res.data.length === 0) {
        //   throw new Error("No results found.");
        // }
        // if (res.data.status === "error") {
        //   throw new Error(res.data.message);
        // }
        console.log(res.data.results);
        //   setEmployeeState({ ...employeeState, results: res.data.results });
        // },[])
        { setEmployeeState(res.data.results) }
        { setManipulateState(res.data.results) }

      })

    //     .catch((err) => console.log(err));
    // }
  }, []);

  const handleInputChange = (event) => {
    const InputSearch = event.target.value.toLowerCase(); //Priya
    console.log(InputSearch);
    setTempSearch(InputSearch);
    const results = manipulateState.filter(mySearch => {
      console.log(mySearch.name.first);
      return mySearch.name.first.toLowerCase().includes(event.target.value) || mySearch.name.last.toLowerCase().includes(event.target.value)
    });   //includes or indexof
    //sort array of objects 
    // console.log(results);

    if (!InputSearch) {
      setEmployeeState(results);
    }
    else {
      setManipulateState(results);
    }

  };

  const handleSortByName = event => {
    console.log("handleSortByNmae");
  };

  const handleSortByAge = event => {
    console.log("handleSortByage");
  };



  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   const results = manipulateState.filter(mySearch => {
  //     console.log(mySearch.name.first);
  //     if (mySearch.name.first.toLowerCase() === tempSearch || mySearch.name.last.toLowerCase() === tempSearch) {



  //       return mySearch;

  //     }

  //   })
  //   console.log(results);

  //   setManipulateState(results);


  // }



  return (
    <Wrapper>
      <Header>
        <h1 className="title text-5xl text-gray-800 mt-16">Employee Directory</h1>
        <p className="mb-16 text-md">Search for an employee or sort by Name or Category.</p>
        </Header>

      <Search handleInputPlaceHolder={handleInputChange}
        handleSortByName={handleSortByName}
        handleSortByAge={handleSortByAge}
      />
      {/* handleSubmitPlaceHolder={handleFormSubmit} /> */}
      <Sorting />
      {manipulateState.map(person => {
        return <EmployeeCard
          key={person.email}
          image={person.picture.large}
          Name={person.name.first}
          Country={person.location.country}
          Email={person.email}
          Age ={person.dob.age}
          Contact={person.phone}
        />
      })}
      {/* <EmployeeCard
      name={Employee[0].name}
      email={Employee[0].email}
      contact={Employee[0].contact}
    />
    <EmployeeCard
      name={Employee[1].name}
      email={Employee[1].email}
      contact={Employee[1].contact}
    />
    <EmployeeCard
      name={Employee[2].name}
      email={Employee[2].email}
      contact={Employee[2].contact}
    /> */}
    </Wrapper>


  );
};


export default Pages;
