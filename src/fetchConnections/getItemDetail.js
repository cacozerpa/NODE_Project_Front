
const data = {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const getItemDetails = async (item) => {
      console.log(item)
    const res = await fetch(`http://localhost:5000/caritem/${item}`, data)
    return await res.json();
  };
  
  export default getItemDetails;