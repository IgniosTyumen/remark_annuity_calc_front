import React from "react";
import style from "./Answer.module.css"

const Answer = (props) => {
    const pResultClassName = style["p-block"] + ` ` +style["p-block-result"] + ` ` +
            (!props.ifSuccess ? style["p-block-error"] : ``);


    return(
        <div>
            <p className={style["p-block"]}>
                Для расчета суммы ежемесячного платежа заполните поля и нажмите кнопку "Расчитать платеж"
            </p>
            <p className={pResultClassName}>
                {props.message}
            </p>
            {
                props.errors.map(err=><p className={pResultClassName}>{err}</p>)
            }
        </div>
    );
};

export default Answer;