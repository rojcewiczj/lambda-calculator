import React, {useState} from "react";
import {operators} from "./src/data.js";
import {OperatorButton} from "./OperatorButton"
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  //const [operatorsState, setOperatorsState] = useState(operators);
  return (
    <div>
       {operators.map((operator)=> {
        return  <OperatorButton key={operator} operator = {operator}/>  
    })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Operators;
