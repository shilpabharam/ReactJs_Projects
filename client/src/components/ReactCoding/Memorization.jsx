import React, {useState , useMemo,useEffect, useCallback, momo} from 'react';

// const Child = memo(function Child({ onClick }) {
//   console.log("Child rendered");
//   return <button onClick={onClick}>Click Me</button>;
// });

export default function Memorization() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child rendered");
    setCount((prev) => prev + 1);
  }, []); // function reference stays same across renders

  return (
    <div>
      <h3>useCallback Example</h3>
      <p>Count: {count}</p>
    
    </div>
  );
}

export function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const doubleCount = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]); // only re-run when 'count' changes

  return (
    <div>
      <h3>useMemo Example</h3>
      <p>Count: {count}</p>
      <p>Double: {doubleCount}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type here..." />
    </div>
  );
}


//export function useLocalStorage(key, initialValue) {
//
//  const [value, setValue] = useState(() => {
//    try {
//      const storedValue = localStorage.getItem(key);
//        console.log("key:",storedValue);
//      return storedValue ? JSON.parse(storedValue) : initialValue;
//    } catch (error) {
//      console.error("Error reading localStorage", error);
//      return initialValue;
//    }
//  });
//
//  useEffect(() => {
//    try {
//      localStorage.setItem(key, JSON.stringify(value));
//        console.log(JSON.stringify(value));
//    } catch (error) {
//      console.error("Error writing to localStorage", error);
//    }
//  }, [key, value]);
//
//  return [value, setValue];
//}

export function useLocalStorage(key, initialValue){

const [value , setValue] = useState(() => {
  try{
        let tempVal = localStorage.getItem(key);
        return tempVal ? JSON.parse(tempVal)  : initialValue;
  }catch{
      return initialValue;
  }
})

useEffect(() => {
  localStorage.setItem(key , JSON.stringify(value))
}, [key, value])

return [value , setValue]
}


export function useFetchData(url){
  const [data , setData] = useState(null);
  const [loading  , setLoading] = useState(false);
  const [error , setError] = useState(null);

    useEffect(() => {
      const fetchData = async() => {
      setLoading(true);
      setError(null);
        try{
          let response = await fetch(url);
           if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
             const jsonData = await response.json();
             setData(jsonData);
        }catch(e){
          setError("error")
        } finally {
        setLoading(false);
      }
    }
    fetchData();
    }, [url])

    return {data, loading, error, setData}
}