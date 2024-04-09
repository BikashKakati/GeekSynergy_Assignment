import React, { useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import { useState } from 'react';
import Loader from "../components/Loader";
const BASE_URL = "https://hoblist.com/api/movieList";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDataFromApi();
  }, [])

  async function fetchDataFromApi() {
    setLoading(true);
    try {
      const params = {
        category: 'movies',
        language: 'kannada',
        genre: 'all',
        sort: 'voting',
      };
      const { data } = await axios.post(BASE_URL, params)
      setData(data?.result || []);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  }


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