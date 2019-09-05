import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


function Quote() {
  const { loading, error, data } = useQuery(gql`
    {
      quote {
        value,
        _embedded {
          source {
            url
          }
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return(
    <>
      <p>{data.quote.value}</p>
      <p><a href={data.quote._embedded.source[0].url}>Source</a></p>
    </>
  )
}

export default Quote