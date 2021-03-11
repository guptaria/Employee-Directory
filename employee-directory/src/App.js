import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header/index';
import Search from './components/Search/index';
import Wrapper from './components/Wrapper/index';
import EmployeeCard from './components/EmployeeCard/index';
import Employee from "./utils/Employee.json";

function App() {
  const [employeeState, setEmployeeState] = useState({
    name: "priyaState",
    Email: "stateEmail",
    Contact: 2146757675
  });

  return (
    <Wrapper>
      <Header>Employee Directory</Header>
      <Search />
      {Employee.map(() => (
        <EmployeeCard
        
          key={employeeState.email}
          email={employeeState.email}
          name={employeeState.name}
          contact={employeeState.contact}

        />
      ))}
    </Wrapper>


  );
}

export default App;
