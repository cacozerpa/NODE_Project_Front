import { setRes, getRes } from "./setGetRes";

const data = {
  method: "DELETE",
  mode: "cors",
  credentials: "include",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const deleteOrder = async (item) => {
  await fetch(
    `http://localhost:5000/deleteuser/${item}`,
    data
  ).then((cat) => {
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
};

export default deleteOrder;