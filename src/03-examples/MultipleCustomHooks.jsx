import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { LoadingQuotes, Quote } from './components'


export const MultipleCustomHooks = () => {

  const { data, isLoading, hasError, NextQuote } = useFetch(
    'https://api.chucknorris.io/jokes/search?query=hello',
  )
  console.log(data)
 const { value, created_at } = !!data && data

  return (
    <>
      <h1>Chuck Norris quotes</h1>
      <hr />
      <div>
      {isLoading ? (
        <LoadingQuotes isLoading={isLoading}/>
      ) : (
        <Quote value={value} created_at={created_at} />
      )}
      </div>
      <button onClick={NextQuote} className="btn btn-primary">
        Next quote
      </button>
    </>
  )
}
