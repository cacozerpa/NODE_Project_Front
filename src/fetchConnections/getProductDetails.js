
const data = {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const getUserByIdFetch = async (item) => {
    const res = await fetch(`http://localhost:5000/products/${item}`, data)
    return await res.json();
  };
  
  export default getUserByIdFetch;