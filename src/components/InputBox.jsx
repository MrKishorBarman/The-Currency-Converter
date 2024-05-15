import React, { useId } from 'react'

const InputBox = ({label, amountDisable = false, amount, onAmountChange, onCurrencyChange, currencyOptions=[], selectCurrency, currencyDisable=false, className= ""}) => {

    const amountInputId = useId()

    return (
        <div
            className={`bg-blue-300 p-3 rounded-lg text-sm flex ${className}`}
        >
            <div
                className='w-1/2'
            >
                <label
                    htmlFor={amountInputId}
                    className='text-black/40 mb-2'
                >
                    {label}
                </label>
                <input
                    type="number"
                    id={amountInputId}
                    className='outline-none w-full bg-transparent py-1.5'
                    placeholder='Amount'
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange(Number(e.target.value))}
                    // when dealing with form inputs in HTML and React, the values are typically treated as strings by default. This means that when you retrieve the value of an input field using e.target.value, it will be returned as a string, even if the user inputs a numeric value.
                />
            </div>
            <div
                className='w-1/2 flex flex-wrap justify-end text-right'
            >
                <p
                    className='text-black/40 mb-2 w-full'
                >
                    Currency Type
                </p>
                <select
                    className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {
                        currencyOptions.map((currency) => (
                            <option
                                key={currency}
                                value={currency}
                            >
                                {currency}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default InputBox
