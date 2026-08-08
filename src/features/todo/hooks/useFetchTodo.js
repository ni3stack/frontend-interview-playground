import { useEffect, useState } from "react";

function useFetchTodos(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchTodoData() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("error loading data");
                }
                const results = await response.json();
                setData(results);
            }catch(err) {
                setError(err);
            }finally {
                setLoading(false);
            }
        }
        fetchTodoData();
    },[url])
    return { data, loading, error}
}

export default useFetchTodos;