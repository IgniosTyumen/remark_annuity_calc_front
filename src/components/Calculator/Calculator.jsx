import React from "react"
import {Field, reduxForm} from "redux-form";
import style from "./Calculator.module.css"

const Calculator = (props) => {

    const onSubmit = (formData) => {
        let {creditSummary, interestRate, creditTerm} = formData;

        props.calculate(creditSummary, interestRate, creditTerm)
    };

    return (
        <div>
            <h1>Калькулятор аннуитентных платежей</h1>
            <InputFormRX onSubmit={onSubmit}/>
        </div>
    );
};

const required = value => value ? undefined : "Необходимо заполнить";
const number = value => value && isNaN(Number(value)) || /,/.test(value) ? "Вводите число" : undefined;

const renderField = ({input, placeholder, type, meta: {touched, error, warning}}) => (
    <div>
        <div>
            <input {...input} placeholder={placeholder} type={type}/>
            <div>
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    </div>
);

const InputForm = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style["input-block"]}>
                <label className={style["input-label"]}>
                    Сумма кредита
                    <Field placeholder={"500 000"} component={renderField} type="number" name={"creditSummary"}
                           validate={[required, number]}/>
                </label>
            </div>
            <div className={style["input-block"]}>
                <label>
                    Годовая ставка
                    <Field placeholder={"1.0"} component={renderField} type="number" name={"interestRate"}
                           validate={[required, number]}/>
                </label>
            </div>
            <div className={style["input-block"]}>
                <label>
                    Лет платежей
                    <Field placeholder={"10"} component={renderField} type="number" name={"creditTerm"}
                           validate={[required, number]}/>
                </label>
            </div>
            <div className={style["input-block"]}>
                <button> Расчитать платеж</button>
            </div>
        </form>
    );
};

const InputFormRX = reduxForm({form: "input"})(InputForm);

export default Calculator;