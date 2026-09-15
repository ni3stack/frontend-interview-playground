import { useEffect, useState } from "react";
import { delayedFetch } from "../../utils/delayedQuery";
import "./style.css";

const gitRepoUrl = "https://api.github.com/search/repositories";

function DebounceSearch() {
  const [ loading, setLoading ] = useState(false);
  const [ repositories, setRepositories ] = useState([]);
  const [ error, setError ] = useState(null);
  const [ searchInput, setSearchInput ] = useState("");


  const fetchUserDetails = async (searchInput, signal) => {
    try {
      const response = await delayedFetch(
        `${gitRepoUrl}?q=${encodeURIComponent(searchInput)}`,
        {
          signal
        }
      );

    if(!response.ok) {
      throw new Error("Error loading data")
    }
    const data = await response.json();
    setRepositories(data);
    }catch(error){
      if (error.name !== "AbortError") {
        setError(
          error instanceof Error
            ? error.message
            : "Failed to load data"
        );
      }
    }finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(!searchInput) {
      setRepositories([]);
      setError(null);
      setLoading(false);
      return;
    }
    const ctrl = new AbortController();
    setLoading(true);
    setError("");

    const timerId = setTimeout(() => {
      fetchUserDetails(searchInput, ctrl.signal);
    },500)

    return () => {
      clearTimeout(timerId);
      // ctrl.abort();
    }
  },[searchInput]);

  return (
    <div className="debounce-page">
      <h1>Debounce Search Component</h1>
      <div className="debounce-search-conatiner">
        <div className="search-input">
          <label htmlFor="searchBox">Search</label>
          <input 
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            id="searchBox"
          />
        </div>
        <div className="search-result">
          { loading && <span>Loading...</span> }
          { error 
            ? ( <div>{error}</div>)
            :
              (
                <div className="search-list">
                  <span>Total repositories macthing search criteria: {repositories.total_count || 0}</span>
                  <div className="repo-list">
                  {
                    repositories?.items?.map(repo => (
                      <div className="repo-item">
                        <h2>{repo?.name}</h2>
                        <p>{repo?.description}</p>
                        <div>Created at: {repo.created_at}</div>
                      </div>
                    ))
                  }
                  </div>
              </div>
            )
          }
        </div>
      </div>

      
    </div>
  );
}

export default DebounceSearch;