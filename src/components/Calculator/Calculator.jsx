import React from "react"
import {Field, reduxForm} from "redux-form";
import {Button} from "react-bootstrap";
import style from "./Calculator.module.css"

const Calculator = (props) => {

    const onSubmit = (formData) =>{
        let {creditSummary, interestRate, creditTerm} = formData;
        debugger;
      props.calculate(creditSummary,interestRate,creditTerm)
    };

    return(
        <div>
            <h1>Калькулятор аннуитентных платежей</h1>
            <InputFormRX onSubmit={onSubmit}/>
        </div>
    );
};


const InputForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style["input-block"]}>
                <label className={style["input-label"]}>
                    Сумма кредита
                    <Field placeholder={"500 000"} component={"input"} name={"creditSummary"} />
                </label>
            </div>
            <div className={style["input-block"]}>
                <label>
                    Годовая ставка
                    <Field placeholder={"1.0"} component={"input"} name={"interestRate"} />
                </label>
            </div>
            <div className={style["input-block"]}>
            <label>
                Лет платежей
                <Field placeholder={"10"} component={"input"} name={"creditTerm"} />
            </label>
        </div>
            <div className={style["input-block"]}>
                <button > Расчитать платеж </button>
            </div>
        </form>
    );
};

const InputFormRX = reduxForm({form:"input"})(InputForm);

export default Calculator;