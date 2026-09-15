import { useEffect, useState } from "react";
import type { Todo } from "../components/types";

function useFetchTodos(url: string) {
    const [data, setData] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchTodoData() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("error loading data");
                }
                const results = await response.json();
                setData(results);
            } catch(err) {
                setError(
                    err instanceof Error ? err : new Error("Something went wrong")
                );
            } finally {
                setLoading(false);
            }
        }
        fetchTodoData();
    },[url])
    return { data, loading, error}
}

export default useFetchTodos;