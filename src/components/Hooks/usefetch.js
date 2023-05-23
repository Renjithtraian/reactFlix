import { useState,useEffect } from "react"
import axios from "axios"

const useFetch = (url,customParams = {}) => { //empty objects..we have==

    const [data,setData] = useState({})
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    const options = {
        method:"get",
        baseURL:"https://api.themoviedb.org/3/",
        url,  //if the name is same we can directy call as url (or url:url)
        params:{
            api_key:"789c78fcbbf9e9855c0bc97fa0ab5b17",
            ...customParams,
        }
    }
    const { page,query } = customParams

    useEffect(() => {
        const fetchData = async () => {
            try{
                let {data} = await axios(options);
                setData(data)
                setLoading(false)
            }
            
            catch(error){
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    },[page,query,url])
    return [data,loading,error]
}

export {useFetch}