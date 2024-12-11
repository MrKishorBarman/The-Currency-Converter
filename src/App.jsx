import React, { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components'
import CurrencyBg from "./items/CurrencyBg.png"

const App = () => {

  const [amount, setAmount] = useState()
  const [from, setFrom] = useState("INR")
  const [to, setTo] = useState("USD")
  const [convertedAmount, setConvertedAmount] = useState('')

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
      className='w-full h-screen flex justify-center items-center bg-no-repeat'
      style={{
        backgroundImage: `url(${CurrencyBg})`,
        backgroundSize: '99.99% 99.99%'
      }}
    >
      <div
        className='w-full'
      >
        <div
          className='max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 sm:mx-10px'
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div
              className='mb-2'
            >
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => {
                  setAmount(amount)
                }}
              />
            </div>
            <div>
              <button
                className='absolute left-1/2 -translate-x-1/2 -translate-y-2/3
                border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-800 hover:h-8 hover:w-14'
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div
              className='mt-2 mb-4'
            >
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-800 hover:h-14'
            >
              Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
