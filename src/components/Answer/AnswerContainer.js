import React from "react"
import {connect} from "react-redux"
import Preloader from "../common/Preloader/Preloader";
import Answer from "./Answer";


const AnswerContainer = (props) => {
    return (
        <>
            {(props.ifFetching) ? <Preloader/>:null}
            <Answer {...props}/>
        </>
    );
};

let mapDispatchToProps =
{
};

let mapStateToProps = (state) => ({
    calcResult: state.calc.calcResult,
    ifSended: state.calc.ifSended,
    ifSuccess: state.calc.ifSuccess,
    ifFetching: state.calc.ifFetching,
    message: state.calc.message,
    errors: state.calc.errors
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerContainer)
