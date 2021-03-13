

import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header/index';
import Search from '../components/Search/index';
import Wrapper from '../components/Wrapper/index';
import EmployeeCard from "../components/EmployeeCard/index"
// import Employee from "../utils/Employee.json";
import API from "../utils/API";
// let results = [];

function Pages() {
  const [employeeState, setEmployeeState] = useState([]);

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
        {setEmployeeState(res.data.results)} 
      })
 
//     .catch((err) => console.log(err));
// }
}, []);

return (
  <Wrapper>
    <Header>Employee Directory</Header>
    <Search />
    {employeeState.map(person => {
        return <EmployeeCard
          key={person.email}
          image={person.picture.large}
          name={person.name.first} 
          email={person.email}
          contact={person.phone}

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
}

export default Pages;
