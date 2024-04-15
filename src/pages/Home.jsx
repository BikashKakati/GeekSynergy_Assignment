import React from 'react';
import Card from '../components/Card';
import Loader from "../components/Loader";
import { useFetch } from '../hooks/useFetch';


const Home = () => {
  const {data,loading, error} = useFetch();

  return (
    <div className='w-full pt-10 flex items-center justify-center flex-wrap'>
      {!!loading && <Loader initial={false}/>}
      {!loading && !!error.length && <h3>{error}</h3>}
      {
        data?.map((movieData) => {
          return <Card key={movieData._id} movieData={movieData} />
        })
      }
    </div>
  )
}

export default Home