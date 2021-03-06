import { getRes, setRes } from "./setGetRes";

const loginFetch = async (username, password) => {
  try {
    const body = {
      username: username,
      password: password,
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

    return await fetch("http://localhost:5000/login", data)
      .then((cat) => {
        console.log(cat.status)
        if (cat.status === 200) {
          setRes("Success");
        } else {
          if(cat.status === 201) {
            setRes("SuccessAdmin");
          }else{
            setRes("Fail")
          }
         
        }
      }).then((response) => {
        const resp = getRes();
        console.log(resp);
      });
      
  } catch (error) {
    console.log(error);
  }
};
export default loginFetch;