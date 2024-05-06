import axios from "axios";

const baseURL = "https://picsum.photos/v2/list";

const service = async () => {
  try {
    const res = await axios.get(baseURL);
    return res;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export default service;
