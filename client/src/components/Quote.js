import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


function Quote() {
  const { loading, error, data } = useQuery(gql`
    {
      quote {
        value
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return(
    <>
      <span>{data.quote.value}</span>
    </>
  )
}

export default Quote