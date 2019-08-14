import React from "react";

const OperatorButton = (props) => {
  return (
    
      /* Display a button element rendering the data being passed down from the parent container on props */
      <button className="operatorButton" onClick={()=> props.addOperator(props.operator.value)} >
        {console.log(props.operator)}
      {props.operator.char}
   </button>
  );
};


export default OperatorButton;