import { getRes, setRes } from "./setGetRes";

const registerFetch = async (name, price, description, img) => {
  try {
    const body = {
      name: name,
      price: price,
      description: description,
      img: img,
    };

    const data = {
      method: "POST",
      mode: "cors",
      credentials: 'include',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    return await fetch("http://localhost:5000/createprod", data)
      .then((cat) => {
        console.log(cat.status)
        if (cat.status === 200) {
          setRes("Success");
        } else {
          setRes("Fail");
        }
      }).then((response) => {
        const resp = getRes();
        console.log(resp);
      });
      
  } catch (error) {
    console.log(error);
  }
};
export default registerFetch;