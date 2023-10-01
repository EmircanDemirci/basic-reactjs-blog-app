import { useState , useEffect } from "react";

const useFetch = (url) => {
    const [data,setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error , setError] = useState(null)

    useEffect(()=>{
        fetch(url)
        .then(result => {
            if(!result.ok){
                throw Error("could not fetch the data for that resource")
            }
            return result.json();
        })
        .then(data=>{
            setData(data)
            setIsPending(false)
        })
        .catch(err=>{
            console.log(err.message);
            setError(err.message);
            setIsPending(false)
        })
    }, [url]);
    return {data,isPending,error}
}
 
export default useFetch;