import { setRes } from './setGetRes';

const createOrder = async (total) => {
  const body = {
    total:total
  }
  try {
   
    const data = {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    };

    return await fetch(`http://localhost:5000/createorder`, data)
    .then((cat) => {
      if (cat.status === 200) {
        setRes('Success');
      } else {
        setRes('Fail');
      }
    })
      .catch((error) => {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        throw error;
      })
      .then((response) => {
        console.log('Success: ', response);
      });
  } catch (error) {
    console.log(error);
  }
};
export default createOrder;