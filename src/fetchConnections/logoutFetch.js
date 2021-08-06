import { setRes } from "./setGetRes";

const logoutFetch = async () => {
  try {
    const data = {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    await fetch(`http://localhost:5000/logout`, data).then(
      (dog) => {
        console.log(dog.status);
        if (dog.status === 200) {
          setRes("Success");
        } else {
          setRes("Fail");
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export default logoutFetch;
