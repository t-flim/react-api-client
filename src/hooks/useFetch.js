import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url, options) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        getData()
    }, [url])

    const getData = () => {
        axios.get(url, options)
            .then((response) => setData(response))
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }

    return {data, loading, error, getData}
}

export default useFetch