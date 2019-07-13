import React from "react"
import Calculator from "./Calculator";
import {connect} from "react-redux"
import {calculate} from "../../redux/calculationReducer"



const CalculatorContainer = (props) => {
    return (
        <>
            <Calculator calculate={props.calculate}/>
        </>
    );
};

let mapDispatchToProps =
    {
        calculate
    };

let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer)
