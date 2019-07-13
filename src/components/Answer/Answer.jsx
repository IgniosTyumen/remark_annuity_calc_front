import React from "react";
import style from "./Answer.module.css"

const Calculator = (props) => {
    return(
        <div>
            <p className={style["p-block"]}>
                Для расчета суммы ежемесячного платежа заполните поля и нажмите кнопку "Расчитать платеж"
            </p>
            <p className={style["p-block"] + ` ` +style["p-block-result"]}>
                {props.message}
            </p>
        </div>
    );
};

export default Calculator;