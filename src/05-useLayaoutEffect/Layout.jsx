import { useCounter, useFetch } from '../hooks';
import { LoadingQuotes, Quote } from '../03-examples/components';


export const Layout = () => {

    const { data, isLoading, hasError, NextQuote } = useFetch(
        'https://api.chucknorris.io/jokes/search?query=hello',
      )
      const { value, created_at } = data
    
      return (
        <>
          <h1>MultipleCustomHooks</h1>
          <hr />
          {isLoading ? (
            <LoadingQuotes />
          ) : (
            <Quote value={value} created_at={created_at} />
          )}
          <button onClick={NextQuote} className="btn btn-primary">
            Next quote
          </button>
        </>
      )
    }