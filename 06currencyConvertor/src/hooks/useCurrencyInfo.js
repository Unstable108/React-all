import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data,setData]= useState({});
    
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((data) => {
                // The API returns an object like { usd: { eur: 0.91, ... } }
                setData(data[currency] || {});
            });
    }, [currency]);
    return data;
}

export default useCurrencyInfo;