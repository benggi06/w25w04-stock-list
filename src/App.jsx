import React from 'react'
import TickerCard from './TickerCard'
// const stocks = [
//   { ticker: 'NVDA', name: '엔비디아', currentPrice: 178.43, previousClose: 181.40 },
//   { ticker: 'TSLA', name: '테슬라', currentPrice: 425.85, previousClose: 439.95 },
//   { ticker: 'GOOGL', name: '알파벳', currentPrice: 251.66, previousClose: 253.22 },
//  { ticker: '005930.KS', name: '삼성전자', currentPrice: 85400, previousClose: 84700 },
// ]
const stocks = [
  { ticker: 'NVDA' },
  { ticker: 'TSLA' },
  { ticker: 'GOOGL' },
  { ticker: '005930.KS' },
  { ticker: 'tslq' },
]

function App() {
  return (
    <div className='bg-gray-100 min-h-screen p-8 flex flex-col items-center'>
      <h1 className="text-4xl font-bold text-gray-800 mb-10">오늘의 주식 시세</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl" >
        {
          stocks.map(stock => (
            <TickerCard 
              key={stock.ticker} 
              ticker={stock.ticker}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App