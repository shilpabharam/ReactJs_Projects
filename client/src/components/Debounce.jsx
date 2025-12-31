const { useState, useEffect, useCallback, useRef } = React;

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // TODO: Implement debounce logic
    // Set a timeout to update debouncedValue after delay
    // Clear timeout on cleanup or when value changes
    const timer = setTimeout(() => {  
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(timer)
      // Cleanup
    };
  }, [value, delay]);

  return debouncedValue;
};

export function Debounce() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const debouncedQuery = useDebounce(query, 500);

  // TODO: Fetch results when debouncedQuery changes
  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      return;
    }
    fetchData();
    // Fetch from API (use JSONPlaceholder /users endpoint)
    // Set loading, fetch data, handle errors
  }, [debouncedQuery]);

    
  const fetchData= async() => {
      try{
        setLoading(true)
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        setResults(data);
      
      }catch(e){
          setError("error" , e)
      }
       setLoading(false)
  }

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setError(null);
  };

  return (
    <div className="container">
      <h1>🔍 Search Users</h1>
      
      <div className="search-box">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type to search..."
          className="search-input"
        />
        {query && (
          <button className="clear-btn" onClick={clearSearch}>×</button>
        )}
      </div>

      <div className="results">
        {loading && <div className="spinner"></div>}
        
        {error && <p className="error">{error}</p>}
        
        {!loading && results.length === 0 && debouncedQuery && (
          <p className="no-results">No results found</p>
        )}
        
        {results.map((user) => (
          <div key={user.id} className="result-item">
            <h3>{user.title}</h3>
            <p>{user.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
