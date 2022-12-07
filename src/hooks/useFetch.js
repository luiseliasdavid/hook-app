import {useEffect, useState} from 'react'

export const useFetch = (url) => {

  const [page, setPage] = useState(0)
  const [state, setState] = useState({
    data: null,
    total: 0,
    isLoading: true,
    hasError: null
  });

   const getFetch = async () => {
    setState({
        ...state,
        isLoading: true,
    })    
    const resp = await fetch(url);
    const data =  await resp.json();
    
    setState({
     data: data.result,
     total: data.total,
     isLoading: false,
     hasError: null 
    })
   }
   const NextQuote = ()=> {
    if (page < state.total-1) setPage( page + 1)
    else setPage(0)
   }
   
    useEffect(() => {
     getFetch(); 
        
    }, [url]);
   
  return {
    data: !!state.data && state.data[`${page}`],
    isLoading: state.isLoading,
    hasError: state.hasError,
    NextQuote
  };

}
