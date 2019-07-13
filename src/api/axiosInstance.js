import * as axios from "axios/index";

const instance = axios.create({
    baseURL: `https://annuitycalc.herokuapp.com/`,
});

export default instance;