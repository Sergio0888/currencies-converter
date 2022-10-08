import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.apilayer.com/currency_data",
    headers: {
        apikey: "8CFotvf0h722fcJH2rsWAP9L6mElhK6V"
    }
})

export const getConvert = async({ to, from, amount }) => {
    const {data} = await instance.get("/convert", {
        params: {
            to,
            from,
            amount
        }
    })
    console.log(data)
    return data;
}

export const getRates = async(source) => {
    const {data} = await instance.get("/live", {
        params: {
            source,
            currencies: 'EUR%2CUSD%2CUAH%2CPLN%2CGBP%2CTRY',
        }
    })
    return data;
}