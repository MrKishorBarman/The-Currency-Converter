import { useState, useEffect } from 'react'

const useCurrencyInfo = (currency) => {

    const [data, setData] = useState({})

      useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/e0d24cfca0396b5b262797a6/latest/${currency}`)

        .then(res => res.json())
        .then(res => setData(res.conversion_rates))
      }, [currency])
      
  return data
}

export default useCurrencyInfo
