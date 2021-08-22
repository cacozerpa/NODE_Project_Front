import { getRes, setRes } from "./setGetRes";

const updateItem = async ( item, qty ) => {
  try {
    const body = {
      qty:qty
    };

    const data = {
      method: "PUT",
      mode: "cors",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    return await fetch(`http://localhost:5000/caritemupdate/${item}`, data)
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
export default updateItem;