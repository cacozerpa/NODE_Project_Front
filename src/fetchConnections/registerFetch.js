import { getRes, setRes } from "./setGetRes";

const registerFetch = async (name, username, email, password) => {
  try {
    const body = {
      name: name,
      username: username,
      email: email,
      password: password,
    };

    const data = {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    return await fetch("http://localhost:5000/create", data)
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