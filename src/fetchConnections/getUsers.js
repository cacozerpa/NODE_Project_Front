
const data = {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const getUserByIdFetch = async () => {
    const res = await fetch(`http://localhost:5000/users`, data)
    return await res.json();
  };
  
  export default getUserByIdFetch;