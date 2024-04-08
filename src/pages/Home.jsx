import React, { useEffect } from 'react'
import { moviesData } from '../utils/movieData'
import Card from '../components/Card'
import axios from 'axios'
const BASE_URL = "https://hoblist.com/api/movieList";

const Home = () => {
  useEffect(()=>{
    setDataOnApi();
  },[])

  async function setDataOnApi() {
    try {
      const params = {
        category: 'movies',
        language: 'kannada',
        genre: 'all',
        sort: 'voting',
      };
      const {data} = await axios.post(BASE_URL, moviesData, {params})
    }catch(err){
      console.log(err.message);
    }
  }

  
  return (
    <div className='w-full pt-10 flex flex-wrap'>
      {
        moviesData.map((movieData) => {
          return <Card key={movieData.id} movieData={movieData} />
        })
      }
    </div>
  )
}

export default Home