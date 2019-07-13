import {calcApi} from "../api/axiosCalculations"

const CALCULATE_SUCCESS = "CALCULATE_SUCCESS";
const CALCULATE_ERROR = "CALCULATE_ERROR";
const CALCULATE_FETCHING = "CALCULATE_FETCHING";
const CALCULATE_TIMEOUT = "CALCULATE_TIMEOUT";

let initialState = {
    calcResult: 0,
    ifSended: false,
    ifSuccess: false,
    ifFetching: false,
    message: "",
    errors: []
};

const calculationReducer = (state = initialState, action) => {

    switch (action.type) {

        case CALCULATE_SUCCESS: {
            return {
                ...state,
                ifSended: true,
                ifSuccess: true,
                ifFetching: false,
                calcResult: action.calcResult,
                message: action.message
            }
        }

        case CALCULATE_ERROR : {
            return {
                ...state,
                ifSended: true,
                ifSuccess: false,
                ifFetching: false,
                calcResult: 0,
                message: action.message,
                errors: action.errors
            }
        }


        case CALCULATE_FETCHING : {
            return {
                ...state,
                ifFetching: action.isFetching,
                errors : !state.ifFetching ?  [] : [...state.errors]

            }
        }

        case CALCULATE_TIMEOUT : {
            return {
                ...state,
                ifSuccess: false,
                message: action.message
            }
        }

        default:
            return state
    }
};


export const calcSuccess = (data) => {
    return {
        type: CALCULATE_SUCCESS,
        ifSended: true,
        ifSuccess: true,
        ifFetching: false,
        calcResult: data.monthlyPayment,
        message: `Ваш ежемесячный платеж составит ` + data.monthlyPayment + ` рублей`
    }
};


export const calcErrorValidation = (data) => {

    return {
        type: CALCULATE_ERROR,
        ifSended: true,
        ifSuccess: false,
        ifFetching: false,
        message: `Ошибка валидации: `,
        errors: data.map(err=>{
            return err.defaultMessage
        })
    }
};

export const calcTimeout = (error) => {
    return {
        type: CALCULATE_TIMEOUT,
        ifSended: true,
        ifSuccess: false,
        ifFetching: false,
        message: `Ошибка сервера: ` + error
    }
};

export const fetchCalcData = (fetching) => {
    return {
        type: CALCULATE_FETCHING,
        ifSended: true,
        ifFetching: fetching,
    }
};

export const calculate = (creditSummary, interestRate, creditTerm) => {
    return (dispatch) => {
        dispatch(fetchCalcData(true));
        calcApi.calculate(creditSummary, interestRate, creditTerm)
            .then(data => {
                dispatch(fetchCalcData(false));
                dispatch(calcSuccess(data));
            })
            .catch(error => {
                debugger
                dispatch(fetchCalcData(false));
                if (error.status===500){
                    dispatch (calcErrorValidation("Поля не заполнены"))
                }
                if (error.response.status===404) {
                    dispatch (calcTimeout("Сервер недоступен"))
                }
                if (error.response.status===400){
                    dispatch(calcErrorValidation(error.response.data.errors))
                }
            })
    };
};

export default calculationReducer;