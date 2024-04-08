import { useEffect, useState } from "react";

// Custom Hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  //Refatorando o post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

const httpConfig = (data,method)=>{
    if(method=='POST'){
        setConfig({
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        });

        setMethod(method)
    }
}
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error('Erro ao carregar os dados');
        }
        
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, callFetch]);


  useEffect(()=>{
    const httpRequest = async () => {
    if(method==='POST'){
        
        let fetchOptions = [url, config];
        
        const res = await fetch(...fetchOptions)

        const json = await res.json();

    }}
    httpRequest()
  },[config, method, url])
  return { data, loading, error, httpConfig };
};


