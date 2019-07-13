import instance from "./axiosInstance"

export const calcApi = {

    calculate(cash, rate, time) {
        let queryPath = `calc`;
        let requestBody =
            {
                creditSummary: cash,
                interestRate: rate,
                creditTerm: time
            };
        return instance.post(queryPath, requestBody)
            .then(response => response.data);
    }
};