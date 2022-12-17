import React from 'react'

export const LoadingQuotes = ({ isLoading }) => {
  return (
    isLoading && (
        <div className="alert alert-info text-center">Loading...</div>
      )
  )
}
