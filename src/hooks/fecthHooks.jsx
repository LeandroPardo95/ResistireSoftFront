import { useState, useEffect } from 'react';

export const useGetHook = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getData = async (url) => {
            try {
                let res = await fetch(url);

                if(!res.ok){
                    throw new Error({
                        err:true,
                        status:res.status,
                        statusText:res.statusText
                    });
                };

                let data = await res.json();

                setData(data);
                setIsPending(false);
                setError({err:false});

            } catch (err) {
               setIsPending(true);
               setError(err);
            }    
        }
        getData(url);  
    }, [url]);

    return {data,isPending,error};
}