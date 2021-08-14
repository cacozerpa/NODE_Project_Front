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

const deleteItem = async (item) => {
  await fetch(
    `http://localhost:5000/deletedetail/${item}`,
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

export default deleteItem;