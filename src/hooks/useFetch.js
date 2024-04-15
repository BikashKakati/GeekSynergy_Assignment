import axios from "axios";
import { useEffect, useState } from "react";
const BASE_URL = "https://hoblist.com/api/movieList";


export function useFetch() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        fetchDataFromApi()
            .then(res => {
                setData(res?.result || [])
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            })
    }, [])

    return { data, loading, error }
}

async function fetchDataFromApi() {
    try {
        const params = {
            category: 'movies',
            language: 'kannada',
            genre: 'all',
            sort: 'voting',
        }
        const {data} = await axios.post(BASE_URL, params)
        return data;
    } catch (err) {
        return err
    }
}